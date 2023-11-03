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

  const handleAddEntry=()=>{
    
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
          <><option key="salary">Salary</option><option key="business">Business</option><option key="services">Services</option><option key="random">Random</option></>
        )}
        {EntryType === "expenses" && (
          <><option key="rent">Rent</option><option key="home">Home</option><option key="medical">Medical</option>
          <option key="regular">Regular</option>
          <option key="extra">Extra</option></>
        )}
        {EntryType === "saving" && (
         <><option key="savings">Savings</option><option key="investment">Investment</option><option key="random">Random</option>
         </>
        )}
      </select>
      </div>

        <button onSubmit={handleAddEntry}>Submit</button>
        </form>
    </div>
  )
  
}

export default FormAddEntry