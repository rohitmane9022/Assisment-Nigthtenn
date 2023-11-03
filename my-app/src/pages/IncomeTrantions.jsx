import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllIncome } from '../Actions/action'



function IncomeTrantions() {
  const income= useSelector(state=> state.income)
  const loading= useSelector(state=> state.loading)
  const [category,setcategory]= useState("")
  const dispatch= useDispatch()
  console.log(income)

  
  useEffect(()=>{
    dispatch(getAllIncome())

  },[])
  
  const total= income.reduce((acc,value)=> value.amount+acc,0)
 
  return (
    <div>
      <select onChange={e=> setcategory(e.target.value)}>
            <option value="salary">Salary</option>
            <option value="business">Business</option>
            <option value="Services">Services</option>
            <option value="Random">Random</option>
            
          </select>
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