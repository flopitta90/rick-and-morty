import { useState } from "react";
import styled from "styled-components";

const Bar= styled.div`
   
   `
 const AgregarButton = styled.button`
 background-color: #19c1a8;
 border-radius: 5px;
 margin-left: 5px;
 color:black;
 border: none;
 padding: 4px;
 font-size: small;
 &:hover{
    background-color: black;
    color: white;  
    cursor: pointer;
 }

`
export default function SearchBar(props) {
   const [character, setName] = useState('')
   
   function handleInput(event){
      setName((character) => character = event.target.value)
   }

   
   function handleClick() {
      props.onSearch(character)
   }

   return (
      <Bar>
         <input placeholder='Escribe un numero' type='text' onChange={handleInput}/>
         <AgregarButton onClick={handleClick}>Agregar</AgregarButton>
      </Bar>
   );
}
