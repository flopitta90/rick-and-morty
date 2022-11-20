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
   justify-content: space-between;

   @media screen and (max-width:960px){
      flex-direction: column;
      align-items: center;
   }
`
const RickAndMorty = styled.img`
   opacity: 0.9;
   width: 450px;
   
   @media screen and (max-width:960px){
      margin:10px;
      width: 350px;
   }
`

const Instruccion = styled.h1`
   color: #93f566;
   font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
   text-align: center;
   margin: 10px;
`

export default function Cards(props) {
   const { characters } = props;

   
 console.log(characters)
   return characters.length > 0 ? <Divcard>
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
   </Divcard> : <DivInicio>
      <RickAndMorty src={rickAndMorty}/>
      <div>
         <Instruccion>Descubre los personajes!</Instruccion>
         <Instruccion>Puedes escribir un numero o apretar Random</Instruccion>
      </div>
   </DivInicio>;
}
