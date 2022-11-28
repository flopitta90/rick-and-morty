import React from 'react'
import styled from 'styled-components'


const PagesButton= styled.button`
  background-color: #93f566;
  margin: 2px;
  border-radius: 5px;
  border: none;
`
const PagesButtonS= styled.button`
  background-color: #19c1a8;
  margin: 2px;
  border-radius: 5px;
  font-weight: bold;
  border: none;
`

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

 return qtyButtons > 1 ? ArrButtons.map(btt => {
  if(btt-1 === currentPage){return <PagesButtonS onClick={handleClick} id={btt}>{btt}</PagesButtonS>}
 return <PagesButton onClick={handleClick} id={btt}>{btt}</PagesButton>}) : null
}
