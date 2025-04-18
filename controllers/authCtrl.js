const Users = require("../models/authModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


const register = async(request, response) => {

    
try {
    const{username, email, password} = request.body

    const existingUser = await Users.findOne({email})
    if(existingUser){
        return response.status(400).json({message : "User already exists"})
    }
    // User Creation
    const user = new Users({username, email, password})
    await user.save()
    return response.status(200).json({ 
    _id: Users._id,
    username: Users.username,
    email: Users.email,
    token: generateToken(Users._id),
    password: Users.password
})


} catch (error) {
   return response.status(500).json({ message: error.message })
    
}


}


const login = async(request, response) => {
    const { email, password} = request.body
    try {
        const user = await Users.findOne({email})
        if(user && (await user.matchPassword(password))){
            return response.status(200).json({
                _id: Users._id,
                username: Users.username,
                email: Users.email,
                token: generateToken(Users._id)
            })
        } else{
            return response.status(401).json({message: "Invalid email or password"})
        }
    } catch (error) {
        return response.status(500).json({message: error.message})
    }

}




module.exports = { register, login}