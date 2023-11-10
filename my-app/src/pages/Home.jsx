import React, { useEffect } from 'react'
import FormAddEntry from './AddEntry'
import { NavLink } from 'react-router-dom'
import { getAllExpenses } from '../Actions/action'
import { useDispatch, useSelector } from 'react-redux'


function Home() {
  
  return (
    <div>
      <div>
      <NavLink to="addentry">
        <p>Add Form</p>
      </NavLink>
    <NavLink to="income">
      Income Transactions
    </NavLink>
    <NavLink to="expense">
      Expenses Transactions
    </NavLink>
    <NavLink to="saving">
      Saving Transactions
    </NavLink>
    <NavLink to="report">
    Financial Reports
    </NavLink>
      </div>
    </div>
  )
}

export default Home