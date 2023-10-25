import { useState } from "react"
import { addValue } from "../Actions/action"
import { useDispatch, useSelector } from "react-redux"


const FormAddEntry=()=>{
  
  const dispatch= useDispatch()
  const [description,setdescription]= useState("")
  const [amount,setamount]=useState(0)
  
  const [category,setcategory]= useState("")
 

  const handleAddEntry=()=>{
    
    const AddValueEntry={
      description:description,
      amount:amount,
      category:category
    }
    dispatch(addValue(AddValueEntry))
    setdescription("")
    setamount(0)
    setcategory("")
    console.log(AddValueEntry)
  }

  return(
    <div>
      
        <label>description</label>
        <input type="text" placeholder="write here" onChange={(e)=> setdescription(e.target.value)}/>
        <label>amount</label>
        <input type="number" placeholder="amount" onChange={(e)=> setamount(e.target.value)}/>
        <label>category</label>
        <select name="cars" id="cars" onChange={e=> setcategory(e.target.value)}>
          <option value="">Please Select</option>
         <option value="income">Income</option>
           <option value="expenses">Expenses</option>
          <option value="saving">Saving</option>
           
        </select>
        <button onClick={handleAddEntry}>Submit</button>
      
    </div>
  )
}

export default FormAddEntry