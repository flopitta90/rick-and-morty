import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import Card from './Card'
import styled from 'styled-components'
import { filterCards, orderCards , filterBySpecie} from '../redux/actions'
import { useState } from 'react'
import SortIcon from "../img/sort.png"
import FilterIcon from "../img/filter.png"
import { useLocation } from 'react-router-dom'
import rickFavorites from "../img/rick-favorites.png"
import { Divcard, PagesDiv } from './Cards'
import { Pagination } from './Pagination'


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
const Image=styled.img`
width: 40%;
object-fit: cover;
   @media screen and (max-width: 960px){
    width: 100%;
    height: 350px;
   }

`
const Instrucciones = styled.h1`
   color: #93f566;
   font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
   text-align: center;
   margin: 50px;
   @media screen and (max-width:960px) {
   }
`

const Contenedor = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (max-width:960px){
    flex-direction: column-reverse;
  }
`




const Favorites = ({myFavorites, allCharacters}) => {

  const [currentPage, setCurrentPage] = useState(0)
  const[showingChars , setShowingChars] = useState([])
  
  
  useEffect(()=>{
     setShowingChars([...myFavorites.slice(currentPage*10, currentPage*10 + 10)])
  },[currentPage, myFavorites])

  const handlePages = (id) => {
    setCurrentPage(id-1)
  }


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

  return ( allCharacters.length > 0 ?
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
    {showingChars.map(character => 
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
    <PagesDiv>
      <Pagination amount={myFavorites.length} currentPage={currentPage} handlePages={handlePages}/>
      </PagesDiv>
  </DivFilters> : <Contenedor>
                    <Image src={rickFavorites}/>
                    <Instrucciones>No has likeado ningun personaje aun!</Instrucciones>
                  </Contenedor>
  )}


function mapStateToProps(state){
 return{myFavorites: state.myFavorites, allCharacters: state.allCharacters} 
}

export default connect(mapStateToProps)(Favorites)
