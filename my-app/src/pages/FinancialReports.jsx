import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllExpenses, getAllIncome } from '../Actions/action'

function FinancialReports() {
  const dispatch= useDispatch()
  const expenses= useSelector(state=> state.expenses)
  const income= useSelector(state=> state.income)
  const loading= useSelector(state=> state.loading)
  // console.log(income)
  const [ShowByValue,setShowByValue]= useState("")

  useEffect(()=>{
    dispatch(getAllExpenses())
    dispatch(getAllIncome())
  },[])

  const expensesValues= expenses.reduce((acc,value)=> value.amount+acc,0)
  const incomeValues= income.reduce((acc,curr)=> curr.amount+acc,0)

  const totalSaving= incomeValues-expensesValues

  const expenseCategory = [...new Set(expenses?.map((item) => item.category))];

  const categoryExpenses = expenseCategory?.map((category) => ({
    category,
    total: expenses.reduce(
      (acc, item) => (item?.category === category ? acc + item?.amount : acc),
      0
    )
  }));
  return (
    <div>
    
      {loading===false?(
        <div>
            <select onClick={e=> setShowByValue(e.target.value)}>
        <option value="incomevsexpenses">Income vs Expenses</option>
        <option value="expensesbreakdown">Expenses Breakdown</option>
      </select>

    <h1>Reports Generate</h1>
          {ShowByValue==="incomevsexpenses"&&(
            <div>
              <h1>Income vs Expenses</h1>
              <h3>Total Income: {incomeValues}</h3>
              <h3>Total Expenses: {expensesValues}</h3>
              <h3>Total Saving: {totalSaving}</h3>
            </div>
          )}

{ShowByValue==="expensesbreakdown"&&(
            <div>
              <h1>Expenses Breakdown</h1>
              {categoryExpenses.map(get=>(
                <div>
                  
                  <h3>Category: {get.category}</h3>
                  <h3>Amount: {get.total}</h3>
                </div>
              ))}
            </div>
          )}
        </div>
      ):<p>Loading...</p>}
    </div>
  )
}

export default FinancialReports