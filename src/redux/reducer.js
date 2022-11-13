export const ADD_FAVORITE = 'ADD_FAVORITE'
export const DELETE_FAVORITE= 'DELETE_FAVORITE'
export const FILTER= 'FILTER'
export const ORDER= 'ORDER'
export const FILTER_SPECIE= 'FILTER_SPECIE'


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
      myFavorites: state.myFavorites.filter(char=> char.id !== action.payload)};

    case FILTER:
      if(action.payload === {gender: 'All', species: 'All'}){
        return {...state, myFavorites: state.allCharacters}
      }
      return {...state,
      myFavorites: [...state.allCharacters.filter(char => 
          ((action.payload.gender === 'All' || action.payload.gender === char.gender) && 
          (action.payload.species === 'All' || char.species === action.payload.species)))
        ]
      };

    case ORDER:
        if(action.payload === "Ascendente"){
          return {...state, 
           myFavorites:[...state.myFavorites.sort((a , b) => a.id - b.id)]
           }
        };
        if(action.payload === 'Descendente') 
        return {...state,
          myFavorites: [...state.myFavorites.sort((a , b) => b.id - a.id)]
        };
       if(action.payload === "A-Z"){
        return {...state, 
          myFavorites:[...state.myFavorites.sort((a , b) => a.name.localeCompare(b.name))]
          }
        };
        return {...state,
          myFavorites: [...state.myFavorites.sort((a , b) => b.name.localeCompare(a.name))]
        };

    default: return state
  }
}

export default reducer