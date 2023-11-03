import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllIncome } from '../Actions/action'



function IncomeTrantions() {
  const income= useSelector(state=> state.income)
  
  const [category,setcategory]= useState("")
  const [SortCategory,setSortCategory]= useState("")
  const dispatch= useDispatch()
 

  
  useEffect(()=>{
    dispatch(getAllIncome())

  },[])
  
  const total= income.reduce((acc,value)=> value.amount+acc,0)
const SortLow= [...income].sort((a,b)=> a.amount-b.amount)
const SortHigh= [...income].sort((a,b)=> b.amount-a.amount)
  
  return (
    <div>
      <select onChange={e=> setcategory(e.target.value)}>
            <option value="salary">Salary</option>
            <option value="business">Business</option>
            <option value="Services">Services</option>
            <option value="Random">Random</option>
            
          </select>
          <label>Low</label>
        <select onClick={e=> setSortCategory(e.target.value)}>
          <option value="">Please Select</option>
          <option value="low">Low</option>
          <option value="high">High</option>
        </select>
      {SortCategory=== "low" && (
        SortLow.map(get=> (
          <div>
            <p>Description: {get.description}</p>
            <p>Category: {get.category}</p>
            <p>Amount: {get.amount}</p>
          </div>
        ))
      ) }
      {SortCategory=== "high" && (
        SortHigh.map(get=> (
          <div>
            <p>Description: {get.description}</p>
            <p>Category: {get.category}</p>
            <p>Amount: {get.amount}</p>
          </div>
        ))
      ) }
  <h3>Total: {total}</h3>

    </div>
  )
}

export default IncomeTrantions