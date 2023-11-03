import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllExpenses } from '../Actions/action'

function ExpensesTrantion() {
  const dispatch=useDispatch()
  const expense=useSelector(state=> state.expenses)
  console.log(expense)

  useEffect(()=>{
    dispatch(getAllExpenses())
  },[])

  const Val= expense.reduce((acc,va)=> va.amount+acc,0)
  console.log(Val)
  return (
    <div>
     {
      expense.map(get=> (
        <div>
          <p>description:{get.description}</p>
          <p>Amount: {get.amount}</p>
          
        </div>
      ))
     }
     <h3>Total: {Val}</h3>
    </div>
  )
}

export default ExpensesTrantion