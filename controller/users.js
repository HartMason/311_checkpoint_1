const users = require("../data/index")          // ../ gets you out of the folder
const sampleUser = require("../data/sampleUser")


const listUsers = (req, res) => {
    res.json(users) 
};

const showUser = (req, res) => {
    const contactID = users.find(data => data.id == req.params.id)            //find someone by id
    console.log(contactID)
    res.send(contactID)
}

const createUser = (req, res) => {
    users.push(sampleUser)
    res.json(users)
}

const updateUser = (req, res) => {
    const contactID = users.find(data => data.id == req.params.id)
    console.log(contactID)
    contactID.name = "Joseph"
}

const deleteUser = (req, res) => {
    const contactID = users.find(data => data.id == req.params.id)
    users.filter(user => user.id !== parseInt(req.params.id))          
}


module.exports = {listUSers, showUser, createUser, deleteUser}             
