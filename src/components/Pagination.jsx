import React from 'react'

export const Pagination = (props) => {
const {amount, currentPage, handlePages} = props

const qtyButtons = Math.ceil(amount/10)
let button = 0
let ArrButtons =[]
while(button < qtyButtons){
 button += 1
 ArrButtons.push(button)
}

const handleClick = (e) => {
  handlePages(e.target.id)
}

 return qtyButtons > 1 ? ArrButtons.map(btt => <button onClick={handleClick} id={btt}>{btt}</button>) : null
}
