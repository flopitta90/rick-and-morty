import Card from './Card';
import styled from 'styled-components';
import rickAndMorty from "../img/rick&morty.png"
import SearchBar from './SearchBar.jsx'

const Divcard = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-evenly;
   margin-bottom: 20px;
`
const DivInicio = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-evenly;

   @media screen and (max-width:960px){
      flex-direction: column;
      align-items: center;
   }
`
const RickAndMorty = styled.img`
   width: 400px;
   
   @media screen and (max-width:960px){
      margin:10px;
      width: 350px;
      position: fixed;
      bottom: 0;
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
      margin-bottom: 30px;
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
      align-items: center;
      justify-content: center;
      width: auto;
      
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

export default function Cards(props) {
   const { characters } = props;

   const handleClick = () => 
   {let id = Math.floor(Math.random() * 826) + 1;
       props.onSearch(id)
   }
   
 console.log(characters)
   return characters.length > 0 
? <Divcard>
      <Contenedor>
         <Random onClick={handleClick}>Random</Random>
         <SearchBar onSearch={props.onSearch}/>
      </Contenedor>
      {characters.map(character => {
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
</Divcard> : <div>
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
