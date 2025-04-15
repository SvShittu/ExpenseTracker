const express = require("express")
const dotenv = require("dotenv").config()
const connectDB = require("./db")
const { authenticate } = require("./authMiddleware")
const authRoutes = require("./routes/authRoutes")
const incomeRoutes = require("./routes/incomeRoutes")
const expenseRoutes = require("./routes/expenseRoutes")


connectDB()

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

app.use("/api", authRoutes)
app.use("/api", incomeRoutes)
app.use("/api", expenseRoutes)

 app.post("/register", authenticate, (request, response, )=>{
 return response.status(200).json({message : "welcome to our server"})
 })

 app.post("/login",(request, response)=>{
    return response.status(200).json({message : "You are now logged in"})
    })