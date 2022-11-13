import { ADD_FAVORITE, DELETE_FAVORITE , FILTER, ORDER, FILTER_SPECIE} from "./reducer.js"



export function addFavorite(character){
  return {type: ADD_FAVORITE, payload: character}
}

export function deleteFavorite(id){
  return {type: DELETE_FAVORITE, payload: id}
}

export function filterCards(gender){
  return {type: FILTER, payload: gender}
}

export function orderCards(id){
  return {type: ORDER, payload: id}
}

export function filterBySpecie(specie){
  return {type: FILTER_SPECIE, payload: specie}
}