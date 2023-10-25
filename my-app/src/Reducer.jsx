const initialState={
  income:[],
  expenses:[],
  saving:[],
  loading:false
}

const FinancialManagment=(state=initialState,action)=>{
  switch(action.type){
    case "Loding":
      return {...state,loading:true}
    case "Income-Added":
      return {...state,income:[action.payload]}
    case "Expenses-Added":
      return {...state,expenses:[action.payload]}
    case "Saving-Added":
      return {...state,saving:[action.payload]}  
    case "Fetch-Income":
      return {...state,income:action.payload}
    case "Fetch-Expenses":
      return {...state,expenses:action.payload}  
      case "Fetch-Savings":
      return {...state,saving:action.payload}  
      default:
        return state
  }
}

export default FinancialManagment