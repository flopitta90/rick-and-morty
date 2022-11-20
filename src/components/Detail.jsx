import React, { useState, useEffect  } from 'react'
import { useParams, useNavigate} from 'react-router-dom'
import styled from 'styled-components'


export const DivDetail = styled.div`
  background-color: rgb(0, 0, 0, 0.75);
  color: #19c1a8;
  text-shadow: 0 0 1px rgb(5, 5, 5);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 3% 15%;
  border-radius: 25px;
  box-shadow: 0 0 20px black;
  @media(max-width: 960px){
      flex-direction: column;
      padding-bottom: 20px;
      width: 100%;
      margin: 0;
   }
`
const Name = styled.h1`
  color: #93f566;
`
export const Volver = styled.button`
   background-color:#93f566;
   border-radius: 5px;
   border: none;
   padding: 10px;
   font-size: medium;
   margin: 0px 45%;
   &:hover{
      background-color: black;
      color: #93f566;  
      cursor: pointer;
      
   }
 
`
export const divContainerDetail = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
     
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
    <divContainerDetail>
      <DivDetail>
         <div>
            <Name>{character.name}</Name>
            <h4>Status: {character.status}</h4>
            <h4>Specie: {character.species}</h4>
            <h4>Gender: {character.gender}</h4>
            <h4>Origin: {character.origin?.name}</h4>
         </div>
         <img src={character.image} alt={character.name}/>
      </DivDetail>
      <Volver onClick={backToHome}>volver</Volver>
   </divContainerDetail>
  )
}

export default Detail
