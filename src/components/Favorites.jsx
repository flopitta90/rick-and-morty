import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import Card from './Card'
import styled from 'styled-components'
import { filterCards, orderCards , filterBySpecie} from '../redux/actions'
import { useState } from 'react'
import SortIcon from "./sort-27-16.png"
import FilterIcon from "./filter-10-16.png"

const Divcard = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-around;
   margin-bottom: 20px;
   font-size: 16px;
   `

const DivSelect = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-evenly;
   margin: 10px;
   `   

const DropDown = styled.select`
  background-color: rgb(255,255,255,0.3);
  border: none;
  border-radius: 5px;
  font-size: 16px;
  padding:5px 9px;
  margin-top: 2px;
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
        <div>
        <img src={SortIcon} height='14px'/>
        <label> Sort</label>
        <br/>
      <DropDown onChange={handleChange}>
         <option>None</option> 
         <option value='A-Z'>A-Z</option>
         <option value="Z-A">Z-A</option>
      </DropDown>
      <DropDown onChange={handleChange}>
        <option>None</option>
        <option value="Ascendente">Ascendente</option>
        <option value="Descendente">Descendente</option>
      </DropDown>
      </div>
      <div>
      <img src={FilterIcon}/>
      <label> Filter</label>
      <br/>
      <DropDown onChange={(e) => dispatch(filterCards(e.target.value))} >
        <option value='All'>All</option>
        <option value='Male'>Male</option>
        <option value='Female'>Female</option>
        <option value='Genderless'>Genderless</option>
        <option value='unknown'>Unknown</option>
      </DropDown>
    
      <DropDown onChange={(e) => dispatch(filterBySpecie(e.target.value))} >
        <option value='All'>All</option>
        <option value='Human'>Human</option>
        <option value='Robot'>Robot</option>
        <option value='Alien'>Alien</option>
        <option value='Animal'>Animal</option>
        <option value='Humanoid'>Humanoid</option>
        <option value='Poopybutthole'>Poopybutthole</option>
        <option value='Cronenberg'>Cronenberg</option>
        <option value='unknown'>Unknown</option>
      </DropDown>
      </div>
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
