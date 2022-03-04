const express = require('express')
const router = express.Router()
const usersController = require("../controller/users")    //bringing the logic from users.js controller file in. 
// * GET /users  * Return all users
router.get("/users", usersController.list) 

router.get("/users/:id", usersController.list) 

router.post("/users", usersController.list) 

router.put("/users/:id", usersController.list) 

router.delete("/users/:id", usersController.list) 





module.exports = router