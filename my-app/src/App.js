import {Route,Routes} from "react-router-dom"
import './App.css';
import Home from "./pages/Home";
import FormAddEntry from "./pages/AddEntry";

import IncomeTrantions from "./pages/IncomeTrantions";
import ExpensesTrantion from "./pages/ExpensesTrantion";
import SavingTrantion from "./pages/SavingTrantion";

function App() {
  
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/addentry" element={<FormAddEntry/>}/>
        <Route path="/income" element={<IncomeTrantions/>}/>
        <Route path="/expense" element={<ExpensesTrantion/>}/>
        <Route path="/saving" element={<SavingTrantion/>}/>
      </Routes>
    </div>
  );
}

export default App;
