import { useState } from "react";
import styled from "styled-components";
import {NavButtons} from './Nav'

const Input= styled.input`
 background-color: rgb(255,255,255,0.3);
 padding: 8px;
 border: none;
 border-radius: 5px;
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
      <div>
         <Input placeholder='Escribe un numero...' type='text' onChange={handleInput}/>
         <NavButtons onClick={handleClick}>Agregar</NavButtons>
      </div>
   );
}
