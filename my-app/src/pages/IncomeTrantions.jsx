import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllIncome } from '../Actions/action'



function IncomeTrantions() {

  const income= useSelector(state=> state.income)
  const loading=useSelector(state=> state.loading)
  
  const [category,setcategory]= useState("")
  console.log(category)
  
  const [SortCategory,setSortCategory]= useState("")
  const dispatch= useDispatch()
  

  
  useEffect(()=>{
    dispatch(getAllIncome())

  },[])
  
  
  const total= income.reduce((acc,value)=> value.amount+acc,0)
  

const applyFilters = (income) => {
  let filteredData = [...income];
 

  const sortMethod = SortCategory;
  

  if (category) {
    filteredData = filteredData.filter(get => get.category.toLowerCase() === category.toLowerCase());
    console.log(filteredData);
  }

  if (sortMethod) {
    sortMethod === "low"
      ? filteredData.sort((a, b) => a.amount - b.amount)
      : filteredData.sort((a, b) => b.amount - a.amount);
      console.log(sortMethod)
  }

  return filteredData;
};

const filteredProducts = applyFilters(income);
  return (
    <div>
     {loading===false?(
      <div>
        <label>Filter by category</label>
        <select onChange={e=> setcategory(e.target.value)}>
        <option value="">Please select</option>
        <option value="salary">Salary</option><option value="business">Business</option><option value="services">Services</option><option value="random">Random</option>
          </select>
          <label>Low</label>
        <select onClick={e=> setSortCategory(e.target.value)}>
          <option value="">Please Select</option>
          <option value="low">Low</option>
          <option value="high">High</option>
        </select>
        {
          filteredProducts.map(get=> (
            <div>
              <p>description: {get.description}</p>
              <p>amount: {get.amount}</p>
              <p>category: {get.category} </p>
            </div>
          ))
        }
  <h3>Total: {total}</h3>

      </div>
     ):<p>Loading...</p>}
    </div>
  )
}

export default IncomeTrantions