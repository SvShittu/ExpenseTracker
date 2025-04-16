const mongoose = require("mongoose")
const incomeSchema = new mongoose.Schema({

    user: { type: mongoose.Schema.Types.ObjectId, ref: "Users", require: true },
    source: { type: String, require: true },
    amount: { type: Number, require: true },
    date: { type: Date, default: Date.now }
})




module.exports = mongoose.model("Income", incomeSchema)