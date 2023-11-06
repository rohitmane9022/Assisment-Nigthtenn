import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllExpenses } from '../Actions/action'

function ExpensesTrantion() {
  const dispatch=useDispatch()
  const expense=useSelector(state=> state.expenses)
  const loading= useSelector(state=> state.loading)
  
  const [category,setcategory]= useState("")
  const [SortCategory,setSortCategory]= useState("")
  
  console.log(expense)

  useEffect(()=>{
    dispatch(getAllExpenses())
  },[])

  const Val= expense.reduce((acc,va)=> va.amount+acc,0)
  console.log(Val)

  const total= expense.reduce((acc,value)=> value.amount+acc,0)
  const CategoryNewValue= [...expense];
  const Values= CategoryNewValue.filter(get=> get.category.toLowerCase()===category)

  const SortLow= [...expense].sort((a,b)=> a.amount-b.amount)
const SortHigh= [...expense].sort((a,b)=> b.amount-a.amount)
  return (
    <div>
     {loading===false?(
      <div>
        <label>Filter by category</label>
        <select onChange={e=> setcategory(e.target.value)}>
        <option value="">Please Select</option>
            <option value="rent">Rent</option><option value="home">Home</option><option value="medical">Medical</option>
          <option value="regular">Regular</option>
          <option value="extra">Extra</option>
            
          </select>
          <label>Low</label>
        <select onClick={e=> setSortCategory(e.target.value)}>
          <option value="">Please Select</option>
          <option value="low">Low</option>
          <option value="high">High</option>
        </select>
        
        {SortCategory=== "" && (
        expense.map(get=> (
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

export default ExpensesTrantion