import { useState } from "react";
import styled from "styled-components";
import {NavButtons} from './Nav'
import { Volver } from "./Detail";

const Container=styled.div`
   display: flex;
   justify-content: space-between;
`

const Input= styled.input`
 background:none;
 padding: 8px;
 border-color: #93f566;
 border-radius: 5px;
 color:white;
`
const Agregar= styled.button`
 text-decoration: none;
 margin-left: 5px;
 color:#93f566;
 border: none;
 font-size: 18px;
 padding:15px ;
 background:none;
 border-radius: 5px;
 &:hover{
    background-color: #19c1a8;  
    color:black;
    cursor: pointer;
    box-shadow: 0 0 10px #19c1a8;
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
      <Container>
         <Input placeholder='Escribe un numero...' type='text' onChange={handleInput}/>
         <Agregar onClick={handleClick}>Agregar</Agregar>
      </Container>
   );
}
