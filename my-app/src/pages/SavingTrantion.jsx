import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllSavings } from '../Actions/action'

function SavingTrantion() {
  const dispatch= useDispatch()
  const saving= useSelector(state=> state.saving)
  // console.log(saving)
useEffect(()=>{
  dispatch(getAllSavings())
},[])

const total=saving.reduce((acc,val)=> val.amount+acc,0)
  return (
    <div>
      {
        saving.map(get=> (
          <div>
            <p>description: {get.description}</p>
            <p>Amount: {get.amount}</p>
            
          </div>
        ))
      }
      <h3>Total: {total}</h3>
    </div>
  )
}

export default SavingTrantion