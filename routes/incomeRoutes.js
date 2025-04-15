const express = require("express")
const router = express.Router()
const {addIncome, getIncomes, } = require("../controllers/incomeCtrl")
const { authenticate } = require("../authMiddleware") // Protected routes

// CREATE income
router.post("/", authenticate, addIncome)

// READ (get all incomes for a user)
router.get("/", authenticate, getIncomes)

// // UPDATE income
// router.put("/:id", authenticate, updateIncome)

// // DELETE income
// router.delete("/:id", authenticate, deleteIncome)

module.exports = router

//updateIncome, deleteIncome 