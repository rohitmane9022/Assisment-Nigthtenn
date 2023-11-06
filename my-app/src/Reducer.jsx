const initialState={
  income:[],
  expenses:[],
  saving:[],
  loading:true
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
      return {...state,income:action.payload,loading:false}
    case "Fetch-Expenses":
      return {...state,expenses:action.payload,loading:false}  
      case "Fetch-Savings":
      return {...state,saving:action.payload,loading:false}  
      default:
        return state
  }
}

export default FinancialManagment