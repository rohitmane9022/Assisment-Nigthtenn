import { useState } from "react"
import { addValue } from "../Actions/action"
import { useDispatch, useSelector } from "react-redux"


const FormAddEntry=()=>{
  const state=useSelector(state=> state)
  const dispatch= useDispatch()
  const [description,setdescription]= useState("")
  const [amount,setamount]=useState(0)
  
  const [category,setcategory]= useState("")
 
  const [EntryType,setEntryType]= useState("")

  console.log(category)
  console.log(state)

  const handleAddEntry=(e)=>{
    e.preventDefault();
    const AddValueEntry={
      description:description,
      amount:amount,
      EntryType:EntryType,
      category:category
    }
    dispatch(addValue(AddValueEntry))
    setdescription("")
    setamount(0)
    setEntryType("Income")
    setcategory("")

   
  }
const handleOptionChange=(e)=>{
  setEntryType(e.target.value)
  setcategory("")
}

const handleCategory=(e)=>{
  setcategory(e.target.value)
}
  
  return(
    <div>
      <form onSubmit={handleAddEntry}>
        <label>description</label>
        <input type="text" placeholder="write here" onChange={(e)=> setdescription(e.target.value)} required/>
        <label>amount</label>
        <input type="number" placeholder="amount" onChange={(e)=> setamount(e.target.value)} required/>
        <label>Entry Type</label>
        <select onChange={handleOptionChange} value={EntryType}>
        <option value="">Select Country</option>
        <option value="income">Income</option>
        <option value="expenses">Expenses</option>
        <option value="saving">Saving</option>
      </select>

        <label>category</label>
        
        <div>
          <label>Select Income: </label>
         
          <select value={category} disabled={EntryType === ""} onChange={handleCategory}>
        <option value="">Select State</option>
        {EntryType === "income" && (
          <><option value="salary">Salary</option><option value="business">Business</option><option value="services">Services</option><option value="random">Random</option></>
        )}
        {EntryType === "expenses" && (
          <><option value="rent">Rent</option><option value="home">Home</option><option value="medical">Medical</option>
          <option value="regular">Regular</option>
          <option value="extra">Extra</option></>
        )}
        {EntryType === "saving" && (
         <><option value="savings">Savings</option><option value="investment">Investment</option><option value="random">Random</option>
         </>
        )}
      </select>
      </div>

        <button type="submit">Submit</button>
        </form>
    </div>
  )
  
}

export default FormAddEntry