const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")

// @desc getAllUsers | @route GET /api/users | @access private
const getUsers = asyncHandler( async (req, res) => {
    console.log("yeet")
    const user = await User.find({user_id:req.user.id})
    res.status(200).json(user)
})

// @desc create new User | @route POST /api/users | @access private
const createUser = asyncHandler( async (req, res) => {
    console.log(`POST: ${JSON.stringify(req.body)}`)

    const {name, email, phone} = req.body
    if (!name || !email || !phone){
        res.status(400)
        throw new Error("createUser: All Fields are Required")
    }
    const user = await User.create({
        name,
        email,
        phone,
        user_id:req.user.id
    })
    res.status(201).json(user)
})

// @desc get User | @route GET /api/users/:id | @access private
const getUser = asyncHandler( async (req, res) => {
    const user = await User.findById(req.params.id)
    if(!user){
        res.status(404)
        throw new Error("getUser: User Not Found")
    }
    res.status(200).json(user)
})

// @desc update User | @route PUT /api/users/:id | @access private
const updateUser = asyncHandler( async (req, res) => {
    const user = await User.findById(req.params.id)
    if(!user){
        res.status(404)
        throw new Error("updateUser: User not Found - Update")
    }

    const userUpdate = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(userUpdate)
})

// @desc Delete User | @route DELETE /api/users/:id | @access private
const deleteUser = asyncHandler( async (req, res) => {
    const userId = req.params.id
    const user = await User.findById(userId)
    if(!user){
        res.status(404)
        throw new Error("deleteUser: User Not Found")
    }
    await User.deleteOne({_id: userId})
    res.status(200).json({ message: 'User removed' })
})


module.exports = {getUsers, createUser, getUser, updateUser, deleteUser}