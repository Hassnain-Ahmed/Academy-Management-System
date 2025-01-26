const asyncHandler = require("express-async-handler")
const User = require("../models/userLoginModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

// @desc Register a User | @route GET /api/register | @access public
const registerUser = asyncHandler( async (req, res) => {
    const {name, phone, username, email, password} = req.body
    if(!name || !phone || !username || !email || !password)
    {
        res.status(400)
        throw new Error("registerUser: All fields are required")
    }
    const userAvailability = await User.findOne({email, username})
    if(userAvailability){
        res.status(400)
        throw new Error("registerUser: userAvailability: User Already Registered")
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    console.log(hashedPassword)

    const user = await User.create({
        name,
        username,
        email,
        phone,
        password: hashedPassword
    })
    console.log(`user created | ${user}`)

    if(user){
        res.status(201).json({_id: user.id, email: user.email, username: user.username})
    }else{
        res.status(400)
        throw new Error("registerUser: User data not valid")
    }
})

// @desc Login a User | @route GET /api/login | @access public
const loginUser = asyncHandler( async (req, res) => {
    
    const {username, password} = req.body
    if(!username || !password){
        throw new Error("loginUser: All fields are required")
    }
    const user = await User.findOne({username})
    try{
            if(user && (await bcrypt.compare(password, user.password))){
                const accessToken = jwt.sign({
                    user:{
                        id: user.id,
                        username: user.username,
                        email: user.email,
                        role: user.role
                    }
                }, process.env.ACCESS_TOKEN_SECRET_KEY, {expiresIn:"15m"}
            )
            res.status(200).json({ accessToken, userID:user.id, userRole:user.role  })
        }
    }
    catch(e){
        res.status(400).json({errorMessgae:e.message})
    }
})

// @desc Current User Information | @route GET /api/current | @access private
const currentUser = asyncHandler( async (req, res) => {
    res.json(req.user)
})

module.exports = {
    registerUser,
    loginUser,
    currentUser
}