import React, { useState, useEffect  } from 'react'
import { useParams, useNavigate} from 'react-router-dom'
import styled from 'styled-components'


const DivDetail = styled.div`
  background-color: rgb(0, 0, 0, 0.75);
  color: #d2d0d0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 5% 15%;
  border-radius: 25px;
  
`
const Volver = styled.button`
   background-color: #93f566;
   border-radius: 5px;
   margin-top: 5%;
   margin-left: 20%;
   border: none;
   padding: 5px;
   font-size: medium;
   &:hover{
      background-color: white;
      color: black;  
      cursor: pointer;
   }

`


const Detail = () => {
   const {id} = useParams()
   const navigate = useNavigate()
  
   function backToHome (){
      navigate('/home')
    }
  

  const [character, setCharacter] = useState('')

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
       .then((response) => response.json())
       .then((char) => {
          if (char.name) {
             setCharacter(char);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       })
       .catch((err) => {
          window.alert('No hay personajes con ese ID');
       });
    return setCharacter({});
 }, [id]);

  return (
    <>
      <Volver onClick={backToHome}>volver</Volver>
      <DivDetail>
         <div>
            <h1>{character.name}</h1>
            <h4>Status: {character.status}</h4>
            <h4>Specie: {character.species}</h4>
            <h4>Gender: {character.gender}</h4>
            <h4>Origin: {character.origin?.name}</h4>
         </div>
         <img src={character.image} alt={character.name}/>
      </DivDetail>
   </>
  )
}

export default Detail
