import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import Card from './Card'
import styled from 'styled-components'
import { filterCards, orderCards } from '../redux/actions'
import { useState } from 'react'

const Divcard = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-evenly;
   margin-bottom: 20px;
   `

const DivSelect = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-evenly;
   margin: 10px;
   `   

const Favorites = ({myFavorites, allCharacters}) => {


  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(filterCards('All'))},[allCharacters])



 const handleChange= (e) => {
  dispatch(orderCards(e.target.value))
  }

  return (
    <div>
      <DivSelect>
      <select onChange={handleChange}>
        <option>None</option>
        <option value="Ascendente">Ascendente</option>
        <option value="Descendente">Descendente</option>
      </select>
      <select onChange={(e) => dispatch(filterCards(e.target.value))} >
        <option value='All'>All</option>
        <option value='Male'>Male</option>
        <option value='Female'>Female</option>
        <option value='Genderless'>Genderless</option>
        <option value='unknown'>Unknown</option>
      </select>
      </DivSelect>
    <Divcard>
    {myFavorites.map(character => 
      <Card 
            key={character.id}
            name={character.name} 
            species={character.species} 
            gender={character.gender}
            image={character.image} 
            id={character.id}
            />
      )}
    </Divcard>
  </div>
  )
}

function mapStateToProps(state){
 return{myFavorites: state.myFavorites, allCharacters: state.allCharacters} 
}

export default connect(mapStateToProps)(Favorites)
