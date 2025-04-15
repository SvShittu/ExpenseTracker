const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const authSchema = new mongoose.Schema({

    username : {type: String, require: true, unique: true},
    email: {type: String, require: true, unique: true},
    password : {type: String, require: true},
    token :{type: String, require: true},
    accountSettings: {
        currency: {type: String, default: "NGN"},
        budgetLimits: { type: Map, of: Number}
    }
},{

    timestamps: true
}
)

//password hashing middleware
authSchema.pre("save", async(next)=>{
    if(!this.isModified("password")) return next()
        this.password = await bcrypt.hash(this.password, 12)
    next()
})

// password comparison method
authSchema.methods.matchPassword = async(enteredPassword)=>{
return await bcrypt.compare(enteredPassword, this.password)

}

const Users = new mongoose.model("Users", authSchema)

module.exports = Users