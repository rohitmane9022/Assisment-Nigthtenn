import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllIncome } from '../Actions/action'



function IncomeTrantions() {
  const income= useSelector(state=> state.income)
  const loading= useSelector(state=> state.loading)
  
  const [category,setcategory]= useState("")
  const [SortCategory,setSortCategory]= useState("")
  const dispatch= useDispatch()
 
  useEffect(()=>{
    dispatch(getAllIncome())

  },[])
  
  const total= income.reduce((acc,value)=> value.amount+acc,0)
  const CategoryNewValue= [...income];
  const Values= CategoryNewValue.filter(get=> get.category.toLowerCase()===category)

const SortLow= [...income].sort((a,b)=> a.amount-b.amount)
const SortHigh= [...income].sort((a,b)=> b.amount-a.amount)
 
  return (
    <div>
     {loading===false?(
      <div>
        <label>Filter by category</label>
        <select onChange={e=> setcategory(e.target.value)}>
        <option value="">Please Select</option>
            <option value="salary">Salary</option>
            <option value="business">Business</option>
            <option value="services">Services</option>
            <option value="random">Random</option>
            
          </select>
          <label>Low</label>
        <select onClick={e=> setSortCategory(e.target.value)}>
          <option value="">Please Select</option>
          <option value="low">Low</option>
          <option value="high">High</option>
        </select>
        
        {SortCategory=== "" && (
        income.map(get=> (
          <div>
            <p>Description: {get.description}</p>
            <p>Category: {get.category}</p>
            <p>Amount: {get.amount}</p>
          </div>
        ))
      ) }
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
     ):<p>Loading...</p>}
      
    </div>
  )
}

export default IncomeTrantions