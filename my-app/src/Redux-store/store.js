import { createStore,applyMiddleware } from "redux"
import FinancialManagment from "../Reducer"
import thunk from "redux-thunk"

const store= createStore(FinancialManagment,applyMiddleware(thunk))

export default store