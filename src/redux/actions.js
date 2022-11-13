import { ADD_FAVORITE, DELETE_FAVORITE , FILTER, ORDER} from "./reducer.js"



export function addFavorite(character){
  return {type: ADD_FAVORITE, payload: character}
}

export function deleteFavorite(id){
  return {type: DELETE_FAVORITE, payload: id}
}

export function filterCards(objfilter){
  return {type: FILTER, payload: objfilter}
}

export function orderCards(id){
  return {type: ORDER, payload: id}
}

