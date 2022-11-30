import Card from './Card';
import styled from 'styled-components';
import rickAndMorty from "../img/rick&morty.png"
import SearchBar from './SearchBar.jsx'
import { Pagination } from './Pagination';
import { useEffect } from 'react';
import { useState } from 'react';

const DivWrapper= styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`

export const Divcard = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-evenly;
   margin-bottom: 20px;
   max-width:1400px;
   min-height: 770px;
   @media screen and (max-width:960px){
      min-height: auto;
   }
`
const DivInicio = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-evenly;

   @media screen and (max-width:960px){
      flex-direction: column;
      align-items: center;
      min-height: 100% vh;
   }
`
const RickAndMorty = styled.img`
   width: 30%;
   
   @media screen and (max-width:960px){
      margin:10px;
      margin-bottom: 0px;
      width: 350px;
      position: relative;
      bottom: 0;
      z-index: 1;
   }
`
const Random = styled.button`
 text-decoration: none;
 color:black;
 border: none;
 font-size: 18px;
 padding:15px ;
 background-color: #93f566;
 border-radius: 5px;

 &:hover{
    background-color: #19c1a8;  
    color:black;
    cursor: pointer;
    box-shadow: 0 0 10px #19c1a8;
 }

 @media screen and (max-width:960px) {
      margin: 30px 0px; 
   }
`
const Contenedor=styled.div`
   width: 98%;
   display: flex;
   justify-content: space-evenly;
   align-items: center;
   margin: 25px;

   @media screen and (max-width:960px) {
      flex-direction: column;
      align-items: stretch;
      justify-content: center;
      width: auto;
      height: fit-content;
      z-index: 998;
   }

`

const Instruccion = styled.h1`
   color: #93f566;
   font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
   text-align: center;
   margin: 10px;
   @media screen and (max-width:960px) {
      display: none;
   }
`
export const PagesDiv = styled.div`
   display: flex;
   justify-content: center;
`

export default function Cards(props) {
   const { characters } = props;

   const handleClick = () => 
   {let id = Math.floor(Math.random() * 826) + 1;
       props.onSearch(id)
   }

   const [currentPage, setCurrentPage] = useState(0)
   const[showingChars , setShowingChars] = useState([])
   
   
   useEffect(()=>{
      setShowingChars([...characters.slice(currentPage*10, currentPage*10 + 10)])
   },[currentPage, characters])

   const handlePages = (id) => {
     setCurrentPage(id-1)
   }
   
 console.log(characters)
   return characters.length > 0 
      ? <>
         <Contenedor>
         <Random onClick={handleClick}>Random</Random>
         <SearchBar onSearch={props.onSearch}/>
         <Random onClick={props.onClearAll}>Clear all</Random>
      </Contenedor>
<DivWrapper>
   <Divcard>
      {showingChars.map(character => {
         return <Card 
         key={character.id}
         name={character.name} 
         species={character.species} 
         gender={character.gender}
         image={character.image} 
         id={character.id}
         onClose = {() => props.onClose(character.id)}
         />
      })
   }
      </Divcard>
      <PagesDiv>
      <Pagination amount={characters.length} currentPage={currentPage} handlePages={handlePages}/>
      </PagesDiv>
   </DivWrapper>
   </> : <div>
                  <Contenedor>
                     <Random onClick={handleClick}>Random</Random>
                     <SearchBar onSearch={props.onSearch}/>
                  </Contenedor>
                  <DivInicio>
                     <RickAndMorty src={rickAndMorty}/>
                     <div>
                        <Instruccion>Descubre los personajes!</Instruccion>
                        <Instruccion>Puedes escribir un numero o apretar Random</Instruccion>
                     </div>
                  </DivInicio>;
               </div>
}
