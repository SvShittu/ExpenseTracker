const Income = require("../models/incomeModel")

const addIncome = async (request, response) => {
  const { source, amount, date } = req.body;
  try {
    const income = new Income({
      user: request.Users._id,
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

const getIncomes = async(request, response)=>{
    try {
        const incomes = await Income.find({ user: request.user._id })
        response.json(incomes)
      } catch (error) {
        response.status(500).json({ message: error.message })
      }
}
module.exports = { addIncome, getIncomes}