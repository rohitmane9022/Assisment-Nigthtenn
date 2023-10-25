import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllIncome } from '../Actions/action'



function IncomeTrantions() {
  const income= useSelector(state=> state.income)
  console.log(income)
  const dispatch= useDispatch()

  useEffect(()=>{
    dispatch(getAllIncome())

  },[])
  // console.log(income)
  const total= income.reduce((acc,value)=> value.amount+acc,0)
  return (
    <div>
      {
      income.map(get => (
        <div>
          <p>description:{get.description}</p>
          <p>Amount: {get.amount}</p>
        </div>
      ))
}
  <h3>Total: {total}</h3>

    </div>
  )
}

export default IncomeTrantions