const express = require('express')
const { home, createUser, getUsers, editUser, deleteUser, login } = require('../controllers/userController')



const router = express.Router()

router.get("/", home)
router.post('/register', createUser)
router.get('/getuser', getUsers)
router.get('/login', login)
router.put('/edituser/:id', editUser)
router.delete('/deleteuser/:id', deleteUser) 

module.exports = router