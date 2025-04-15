const Expense = require("../models/expenseModel")

const createExpense = async (request, response) => {
  const { source, amount, date } = request.body
  try {
    const income = new Income({
      user: request.user._id,
      source,
      amount,
      date
    })
    await income.save()
    response.status(201).json(income)
  } catch (error) {
    response.status(500).json({ message: error.message })
  }
}
const getExpenses = async (request, response) => {
  const { source, amount, date } = request.body
  try {
    const income = new Income({
      user: request.user._id,
      source,
      amount,
      date
    })
    await income.save()
    response.status(201).json(income)
  } catch (error) {
    response.status(500).json({ message: error.message })
  }
}


module.exports = {createExpense, getExpenses }