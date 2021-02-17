const express = require('express');
const router = express.Router();
const Client = require('../models/Client')
const Login = require('../models/Login')


// import controller
const { requireSignin, adminMiddleware } = require('../controllers/auth.controller');
const { readController, updateController } = require('../controllers/user.controller');

router.get('/user/:id', requireSignin, readController);
router.put('/user/update', requireSignin, updateController);
router.put('/admin/update', requireSignin, adminMiddleware, updateController);


getData = async () => Client.find({}) 

router.get('/clients', async function (req, res) {
    let clients = await getData()
    res.send(clients)
    })
    
router.get('/clients/actions', async function (req, res) {
        let clients = await Client.find({}, "_id name owner")
        res.send(clients)
        })
    
router.post('/client', function (req, res) {
    const c = req.body
    const newClient = new Client({
        name: c.name,
        email: c.email,
        firstContact: c.firstContact,
        emailType: c.emailType,
        sold: c.sold,
        owner: c.owner,
        country: c.country
    })
    newClient.save().then(function(client){
        res.send(`new client added - ${client.name}`)
    })
})

router.put('/client/:id', async function (req, res) {
    let { name, country } = req.body
    let id = req.params.id
    let update = await Client.findOneAndUpdate({ _id: id }, { name, country })
    res.send("Client has been updated")
})

router.put('/owner/:id/:owner',async function (req, res) {
        let id = req.params.id
        let owner = req.params.owner
    
        let updateOwner = await Client.findOneAndUpdate({ _id: id }, { owner: owner })
        res.send(`Client's owner updated- the new owner is ${updateOwner}`)
       
    })
    
router.put('/email/:id/:emailType',async function (req, res) {
        let id = req.params.id
        let emailType = req.params.emailType
    
        let updateEmail = await Client.findOneAndUpdate({ _id: id }, { emailType: emailType })
        res.send(`Client's email type updated- the new email type is ${updateEmail}`)
       
    })
    
router.put('/declare/:id',async function (req, res) {
        let id = req.params.id
        let declare = await Client.findOneAndUpdate({ _id: id }, { sold: true })
        console.log(declare)
        res.send("Sold")
        
    })

router.post('/login', async function (req, res) {
    try {
        let {name,password} = req.body;
        const newClient = new Login({
            username: name,
            password: password
        })
        newClient.save().then(() => res.send('Done'))
    } catch (error) {
        console.log(error)
    }
})

router.post('/register', async function (req, res) {
    try {
        let {username,email,password} = req.body;
        const newClient = new Login({
            name: username,
            email: email,
            password: password
        })
        newClient.save().then(() => res.send('Done'))
    } catch (error) {
        console.log(error)
    }
})

module.exports = router




module.exports = router;