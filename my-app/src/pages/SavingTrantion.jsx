import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllSavings } from '../Actions/action'

function SavingTrantion() {
  const dispatch= useDispatch()
  const saving= useSelector(state=> state.saving)
  const loading= useSelector(state=> state.loading)
  const [category,setcategory]= useState("")
  const [SortCategory,setSortCategory]= useState("")
  // console.log(saving)
useEffect(()=>{
  dispatch(getAllSavings())
},[])

const total=saving.reduce((acc,val)=> val.amount+acc,0)

const applyFilters = (saving) => {
  let filteredData = [...saving];
 console.log(filteredData)

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
const filteredProducts = applyFilters(saving);
  return (
    <div>
      {loading===false?(
      <div>
        <label>Filter by category</label>
        <select onChange={e=> setcategory(e.target.value)}>
        <option value="">Please Select</option>
            <option value="savings">Saving</option><option value="investment">Investment</option>
          <option value="random">Random</option>
         
            
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
              
              <p>category: {get.category} </p>
              <p>Date: {new Date(get.createdAt).toLocaleDateString("en-GB")}</p>
              <p>amount: {get.amount}</p>
            </div>
          ))
        }
  <h3>Total: {total}</h3>

      </div>
     ):<p>Loading...</p>}
    </div>
  )
}

export default SavingTrantion