import Card from './Card';
import styled from 'styled-components';

const Divcard = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-evenly;
   margin-bottom: 20px;

   `

export default function Cards(props) {
   const { characters } = props;

   return <Divcard>
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
         })}
   </Divcard>;
}
