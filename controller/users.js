const users = require("../data/index")          // ../ gets you out of the folder
const sampleUser = require("../data/sampleUser")


const listUsers = (req, res) => {
    res.json(users) 
    //server timed out is a server issue 500
};

const showUser = (req, res) => {
    const contactID = users.find(data => data.id == req.params.id)            //find someone by id
    console.log(contactID)
    if (!contactID) {
        res.status(404).json({msg : `User id ${req.params.id} not found`}) 
    } else {
    res.send(contactID)
    }
    //404 
    //if/else 
    //if the response came back good or not
};

const createUser = (req, res) => {
    if(!newUsers.id) {
        res.status(400).json({ msg: "New users require an id" })
    } else {
        users.push(sampleUser)
        res.json(users)
    }
};

const updateUser = (req, res) => {
    const contactID = users.find(data => data.id == req.params.id)
    // console.log(contactID)
    if (contactID){
        contactID.name = "Joseph";
        res.json(contactID)
    } else {
        res.status(404).json({msg : `User id ${req.params.id} not found`}) //req.params.id. is trying grab the id
    }
};


const deleteUser = (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id))
        if (found){
            res.json({
                msg: 'user deleted',
                users: users.filter(user => user.id !== parseInt(req.params.id))
            }) 
        } else {
            res.status(404).json({msg : `User id ${req.params.id} not found`})
            }
    };          



module.exports = {listUsers, showUser, createUser, updateUser, deleteUser}             
