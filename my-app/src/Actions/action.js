export const addValue=(value)=>async(dispatch)=>{
  try{
    dispatch({type:"Loading"})
    const response= await fetch(`https://assiment-nighteen.rohitmane2.repl.co/${value.category}`,{
      method:"POST",
      headers:{
        "Content-Type":"application/JSON"
      },
      body:JSON.stringify(value)
    })

    const data= await response.json();
    if(value.category==="income"){
      dispatch({type:"Income-Added",payload:data})
    }
    else if(value.category==="expenses"){
      dispatch({type:"Expenses-Added", payload:data})
    }
    else if(value.category==="saving"){
      dispatch({type:"Saving-Added", payload:data})
    }
   
  }
  catch(error){
    console.log("Something went wrong")
  }
}

export const getAllIncome=()=>async(dispatch)=>{
  try{
    dispatch({type:"Loading"})
    const response= await fetch("https://assiment-nighteen.rohitmane2.repl.co/income")
    const data=await response.json()
    const IncomeItems=data.response
    dispatch({type:"Fetch-Income", payload:IncomeItems})
    
  }
  catch(error){
    console.log("Something went wrong", error)
  }
}

export const getAllExpenses=()=>async(dispatch)=>{
  try{
    dispatch({type:"Loading"})
    const response= await fetch("https://assiment-nighteen.rohitmane2.repl.co/expenses")
    const data= await response.json()
    const ExpensesItems=data.response
    dispatch({type:"Fetch-Expenses", payload:ExpensesItems})
  }
  catch(error){

  }
}
export const getAllSavings=()=>async(dispatch)=>{
  try{
    dispatch({type:"Loading"})
    const response= await fetch("https://assiment-nighteen.rohitmane2.repl.co/saving")
    const data= await response.json()
    const SavingItems=data.response
    dispatch({type:"Fetch-Savings", payload:SavingItems})
  }
  catch(error){

  }
}