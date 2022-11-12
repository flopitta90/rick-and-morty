export const ADD_FAVORITE = 'ADD_FAVORITE'
export const DELETE_FAVORITE= 'DELETE_FAVORITE'
export const FILTER= 'FILTER'
export const ORDER= 'ORDER'

const initialState = {
  myFavorites: [],
  allCharacters: []
}

function reducer (state = initialState, action){
  switch(action.type){
    case ADD_FAVORITE:
      return {...state, allCharacters: [...state.allCharacters, action.payload], 
        myFavorites: [...state.allCharacters, action.payload]};
    case DELETE_FAVORITE:
      return {allCharacters: state.allCharacters.filter(char => char.id !== action.payload),
      myFavorites: state.allCharacters};
    case FILTER:
      if(action.payload === 'All'){
        return {...state, myFavorites: state.allCharacters}
      }
      return {...state,
      myFavorites: state.allCharacters.filter(char => char.gender === action.payload)};
    case ORDER:
        if(action.payload === "Ascendente"){
          return {...state, 
           myFavorites:[...state.myFavorites.sort((a , b) => a.id - b.id)]
           }
        };
        return {...state,
          myFavorites: [...state.myFavorites.sort((a , b) => b.id - a.id)]
        }

    default: return state
  }
}

export default reducer