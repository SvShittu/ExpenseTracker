const express = require("express")
const router = express.Router()
const { createExpense, getExpenses,} = require("../controllers/expenseCtrl")
const { authenticate } = require("../authMiddleware") // protect the routes

// CREATE expense
router.post("/", authenticate, createExpense)

// READ (get all expenses for a user)
router.get("/", authenticate, getExpenses)

// // UPDATE expense
// router.put("/:id", authenticate, updateExpense)

// // DELETE expense
// router.delete("/:id", authenticate, deleteExpense)

module.exports = router;

// updateExpense, deleteExpense
