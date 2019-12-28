
const express = require('express');
const session = require('express-session');
const app = express();
const bodyParser = require('body-parser');
const Mongoose = require('mongoose');
const RetailUsers = require('./RetailUsers');
const ManuUsers  = require('./ManufactureUsers');
const Medicines = require('./Medicine');
const Orders = require('./Orders');
const ManuMedicine = require('./ManuMedicine');
const SessionCollection = require('./Sessions');
const dotenv = require('dotenv').config();
const db = Mongoose.connect(process.env.dburl, {useNewUrlParser: true});
Mongoose.connection.once('open', () => console.log("Connected to database!"));
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
var path = require('path');
module.exports.bcrypt = bcrypt;
app.use(express.json());
app.use(cookieParser());

app.use(session({
    name: 'sid',
    resave: false,
    saveUninitialized: false,
    secret: "be quite, it is a secrete!!!",
    cookie:{
        maxAge:  5 * 60 * 1000,
        sameSite: true,
    }
}));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(path.join(__dirname, 'client', 'build')));


const auth = async (req, res, next)=>{
    console.log("I am being executed");
    console.log("The session id is: "+   req.session.userid );
    console.log(  req.session.userid );
    if(  req.session.userid ) {
        console.log("I have executed sessions successfully");
        next()
    }
    else
        console.log("Session is not set");
};


app.post('/app/register', async (req, res) => {
    console.log('A request came in with the body' + JSON.stringify(req.body));
    const {company_name, city_name, id, password} = req.body;
    try {
        //const existing_user = await RetailUsers.findOne({id: {$eq: id} });
        //if(existing_user) return res.sendStatus(400);
        bcrypt.hash(password, 12, async (error, hash) => {
            if(error){
                console.log("Error in creating a password hash");
                return res.sendStatus(400);
            }
            await RetailUsers.create({company_name: company_name, city_name: city_name, id: id, password: hash});
            console.log("A new reatil user is created");
            return res.sendStatus(200);
        })
  }
    catch(error){
        console.log("error in the server side"+ error.message);
    }
});



app.post('/pharma/manufacturer/signup', async (req, res) => {
    console.log('A request came in with the body' + JSON.stringify(req.body));
    const {company_name, city_name, id, password} = req.body;
    try {
        const existing_user = await ManuUsers.findOne({id: {$eq: id}});
        if (existing_user) return res.sendStatus(400);
        bcrypt.hash(password, 12, async (error, hash) => {
            if (error) {
                console.log("Error in creating a password hash");
                return res.sendStatus(400);
            }
            await ManuUsers.create({company_name: company_name, city_name: city_name, id: id, password: hash});
            console.log("A new Manufacturer is created");
            return res.sendStatus(200);
        })
    }
    catch(error){
        console.log("error in the server side: "+ error.message);
    }
});


app.post('/app/retailer/login', async(req, res) => {
    console.log("I am creating a json object"+ JSON.stringify(req.body));
    const {id, password} = req.body;
    try{
       const result = await RetailUsers.findOne({id: {$eq: id}});
        if(!result) return res.sendStatus(400);
        else{
            bcrypt.compare(password, result.password, async(err, result) => {
                if(err) console.log("There is an error checking password"+ err.message);
                if(result === true) {
                        req.session.userid = req.body.id;
                    console.log("The session id is: "+ req.session.userid);
                    console.log("I have set request.session.id to: "+ req.session.userid);
                    console.log("Authenticated Successfully");
                    return res.sendStatus(200)
                }
                console.log("Incorrect username or password");
                return res.sendStatus(400)
            })

        }
    }
    catch(error){
        console.log("Error in validating login: "+ error.message)
    }
});

app.post('/app/man/login', async(req, res) =>{
    console.log("I am creating a json object"+ JSON.stringify(req.body));
    const {id, password} = req.body;
    try{
        const result = await ManuUsers.findOne({id: {$eq: id}});
        if(!result) return res.sendStatus(400);
        else{
            bcrypt.compare(password, result.password, (err, result) => {
                if(err) console.log("There is an error checking password"+ err.message);
                if(result === true) {
                    console.log("Authenticated Successfully");
                    return res.sendStatus(200)
                }
                console.log("Incorrect username or password");
                return res.sendStatus(400)
            })

        }
    }
    catch(error){
        console.log("Error in validating login: "+ error.message)
    }
});

app.post('/app/med', auth, async(req, res) => {
    console.log("The userid of the concerned person is: "+ req.session.userid);
    console.log("I am creating a json object"+ JSON.stringify(req.body));
    const {medicinename, count, medicineid} = req.body;
    try{
        if(count <= 0){
            console.log("Count cannot be less than 0");
            return res.sendStatus(400)
        }
        const response = await Medicines.create({medicinename: medicinename, count: count, medicineid: medicineid, user: req.session.userid});

        console.log("A new medicine is added in to the database");
    }
    catch(error){
        console.log(error.message);
    }
});


app.get('/app/allmed', auth ,  async(req, res) => {
    try{
        const results = await Medicines.find({user: req.session.userid});
        return res.send(results).status(200);
    }
    catch(error){
        console.log("Error in retriving medicines"+ error.message);
    }
});

//Get count of medicines
app.put('/app/count/:medid', async(req, res) =>{
    console.log("I am in medicine increment count and the medicine id is: "+ req.params.medid);
    let medicineid = req.params.medid;
    let db_count;
    try{
        const reqdoc = await Medicines.findOne({medicineid: {$eq: medicineid}});
        const filter = {medicineid: medicineid};
        const update = {count: reqdoc.count + 1};
        db_count = await Medicines.findOneAndUpdate(filter, update, {new: true});
        return res.sendStatus(200);
    }
    catch(error){
        console.log("Error is: "+ error.message);
    }
    console.log("The count of the medicine is: "+ db_count.count);
    console.log("The id is: "+ db_count.medicineid)
});

app.put('/app/count1/:medid', async(req, res) =>{
    console.log("The med id is in server: " + req.params.medid);
    let medicineid = req.params.medid;
    let db_count;
    try{
        const reqdoc = await Medicines.findOne({medicineid: {$eq: medicineid}});
        const filter = {medicineid: medicineid};
        const update = {count: reqdoc.count - 1};
         db_count = await Medicines.findOneAndUpdate(filter, update, {new: true});
         return res.sendStatus(200);
    }
    catch(error){
        console.log("Error is: "+ error.message);
    }
    console.log("The count of the medicine is: "+ db_count.count);
    console.log("The id is: "+ db_count.medicineid)
});

app.post('/app/notify',auth,  async(req, res) => {
  console.log("The request i got is: "+ JSON.stringify(req.body));
    const {medicinename, count, medicineid} = req.body;
    if(count <= 0){
        console.log("Count cannot be zero");
        return res.sendStatus(400)
    }
    const result = Medicines.findOne({medicineid: {$eq: medicineid}});
    if(!result) {
        console.log("There is no such medicine id, you cannot add");
        return res.sendStatus(400)
    };
    try {
        await Orders.create({medicinename: medicinename, count: count, medicineid: medicineid});
        return res.sendStatus(200)
    }
    catch(error){
        console.log(error.message);
    }
});

app.post('/app/manu/addmed', async(req, res)=> {
    console.log("The request I got is: "+ JSON.stringify(req.body));
    const {medicineid, medicinename} = req.body;
    try {
        await ManuMedicine.create({medicineid: medicineid, medicinename: medicinename});
        return res.sendStatus(200);
    }
     catch(error){
        console.log(error.message);
    }
});

app.get('/app/manu/allmed', async(req, res) => {
    try{
        const results = await ManuMedicine.find({});
        return res.send(results).status(200);
    }
    catch(error){
        console.log("Error in retriving medicines"+ error.message);
    }
});

app.post('/app/notify',auth,  async(req, res) => {
    console.log("The request I got is: "+ JSON.stringify(req.body));
    const {medicineid, medicinename, count} = req.body;
    try{
        await Orders.create({medicinename: medicinename, medicineid: medicineid, count: count});
        return res.sendStatus(200)
    }
    catch(error){
        console.log(error.message);
    }
});

app.get('/app/orders', async(req, res) =>{
    console.log("I am fetching orders............");
    try{
        const results = await Orders.find({});
        return res.send(results).status(200);
    }
    catch(error){
        console.log("Error in server side in fetching the orders: ");
    }
});

app.post('/logout', async(req, res) => {
    req.session.destroy((err) =>{
        if(err){
            return res.sendStatus(400)
        }
        console.log("I have successfully destroyed the session");
        res.clearCookie('sid');
        return res.sendStatus(200)
        })
});

app.get('/test/app', (req, res) =>{
    const {retailud} = req.session;
    console.log(req.session);
    if(retailud){}
    console.log("I am happy for you")
});

app.delete('/medicine/del/:medid', async (req, res) =>{
     console.log(req.params.medid);
    console.log("The medicine id requested to delete is: "+ req.params.medid);
    try {
        await Medicines.deleteOne({medicineid: {$eq: req.params.medid}}, {user: req.session.userid});
        return res.sendStatus(200)
    }
    catch(error){
        console.log("Error in deleting in server side: "+ error.message);
    }
});


app.get('*', (request, response) => {
    return response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});


const port = process.env.PORT || 4000;
app.listen(port, ()=> {console.log("I am listening at port 4000")});

