import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import Card from './Card'
import styled from 'styled-components'
import { filterCards, orderCards , filterBySpecie} from '../redux/actions'
import { useState } from 'react'
import SortIcon from "../img/sort.png"
import FilterIcon from "../img/filter.png"
import { useLocation } from 'react-router-dom'

const Divcard = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-evenly;
   margin-bottom: 20px;
   font-size: 16px;
   `
const DivFilters= styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const DivSelect = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-evenly;
   margin: 10px;
   background-color: rgb(25, 193, 168, 0.5);
   width: 500px;
   padding: 10px;


   @media screen and (max-width:960px) {
    width: 350px;
    text-decoration: none;
    color:black;
   }
   `   

const DropDown = styled.select`
  background-color: rgb(255,255,255,0.3);
  border: none;
  border-radius: 5px;
  font-size: 16px;
  padding:5px 9px;
  margin: 2px;
`   

const Favorites = ({myFavorites, allCharacters}) => {


  const dispatch = useDispatch()



  const arrayGender = allCharacters.map(char => char.gender)
  const arraySpecies = allCharacters.map(char => char.species)
  const setGender = [...new Set(arrayGender)]
  const setSpecie = [...new Set(arraySpecies)]
  

 const handleChange= (e) => {
  dispatch(orderCards(e.target.value))
  }

  
  const [selectedGender , setSelectedGender] = useState('All')
  const [selectedSpecie, setSelectedSpecie] = useState('All')
  
 

  const handleFilter = (e) => {
  
    if(e.target.id === 'gender'){
      setSelectedGender(e.target.value)
      const payload = {gender: e.target.value, species: selectedSpecie}
      dispatch(filterCards(payload))
    } else {
        setSelectedSpecie(e.target.value)
        const payload = {gender: selectedGender, species: e.target.value} 
        dispatch(filterCards(payload))
      }
    }
    const location = useLocation()

  return (
    <DivFilters>
      <DivSelect>
        <div>
        <img alt='sort-icon'src={SortIcon} height='14px'/>
        <label> Sort</label>
        <br/>
      <DropDown onChange={handleChange}>
         <option>None</option> 
         <option value='A-Z'>A-Z</option>
         <option value='Z-A'>Z-A</option>
      </DropDown>
      <DropDown onChange={handleChange}>
        <option>None</option>
        <option value="Ascendente">Ascendente</option>
        <option value="Descendente">Descendente</option>
      </DropDown>
      <br/>
      </div>
      <div>
      <img alt='filter-icon' src={FilterIcon}/>
      <label> Filter</label>
      <br/>
      <DropDown  id='gender' onChange={handleFilter} >
        <option value='All'>All</option>
        {setGender.map(gender =>
          <option value={gender}>{gender}</option>)}
      </DropDown>
    
      <DropDown id='species' onChange={handleFilter} >
        <option value='All'>All</option>
        {setSpecie.map(specie =>
          <option value={specie}>{specie}</option>)}
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
  </DivFilters>
  )}


function mapStateToProps(state){
 return{myFavorites: state.myFavorites, allCharacters: state.allCharacters} 
}

export default connect(mapStateToProps)(Favorites)
