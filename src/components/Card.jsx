import styled from "styled-components";
import {NavLink, useLocation} from 'react-router-dom'
import { addFavorite, deleteFavorite } from "../redux/actions.js";
import { connect } from "react-redux";
import { useState, useEffect  } from "react";



const CardDiv = styled.div`
   background-color: rgb(0, 0, 0,0.7);
   padding: 20px;
   width: 175px;
   color: black;
   border-radius: 25px;
   display: flex;
   position: relative;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   margin: 15px;
   @media (hover: hover) {
      &:hover {
         transform: scale(1.01) translate(-2%, -2%);
         transition-delay: 250ms;
         box-shadow: 0 0 10px #19c1a8;
      }
   }
   @media screen and (max-width:960px) {
      width: 300px;
   }   
`
const ButtonX = styled.button`
   background-color: #93f566;
   border-radius: 5px;
   width: 20px;
   height: 20px;
   border: none;
   margin-top: 3px;
   @media (hover:hover){
      &:hover{
         background-color: black;
         color: white;  
         cursor: pointer;
      }
   }   
   `

const CardHeader = styled.div`
   display: flex;
   flex-direction: row-reverse;
   justify-content: space-between;
   align-items: center;
   color: black;
   height: 75px;
   width: 100%;
   `
const Atributes = styled.div`
  display: flex ;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: #93f566;
  border-radius: 10px;
  width: 100%;
  `
const ImgCard = styled.img`
   width: 100%;
   object-fit: cover;
   height: 180px;
   border-radius: 10px;
   margin-top: 10px;
    @media screen and (max-width:960px) {
      height: 300px;
    }
   `
const Span = styled.span`
   `

const Name = styled.h2`
   color: #19c1a8;
   max-width: 130px;
   `

const FavButton = styled.button`
   background-color: transparent;
   border: none;
   font-size: large;
`   
const CrossFav = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`
const Link = styled(NavLink)`
   text-decoration: none;
   color: black;
`




function Card(props) {
   
   const [isFav, setIsFav] = useState(false)

//mediante un estado local seteamos que con cada click, 
//si mi personaje era fav seteamos el estado en false, y despachamos la accion de eliminar del estado global este id
//si mi personaje no era fav, seteamos el estado local en true, y despachamos la accion de agregarlo al estado global
//pasandole todas las props de ess personaje al estado global 

   function handleFavorite(){
      if(isFav) {setIsFav(false)
      props.deleteFavorite(props.id)};
      if (!isFav) {setIsFav(true)
      props.addFavorite(props)}
   }
   
//esta funcion ejecuta la funcion onclose que nos llega por props desde cards, y quien la tiene declarada es app.js
   
   function handleClick() {
      props.onClose()
   }

//este permite que el componente se renderice cuando existe un cambio en la prop allchars del estado global
//ademas setea que si el char.id es igual al id que recibimos por props debe setear el estado local en true

   useEffect(() => {
      props.allCharacters.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });   
   }, [props.allCharacters]);

//este hook es el que me permite chequear en que pagina estoy navegando 
   
const location = useLocation()
function longNames(){
   const arrayName = props.name.split(' ')
   const bigName = arrayName.filter(word => word.length > 10)
   if(props.name.length > 20 || bigName.length > 0){
      return props.name.slice(0,9) + '...'
   };
   return props.name   
}

// lo que renderiza nuestro componente
   return (
      <CardDiv>
         <CardHeader>
            <CrossFav>
               {isFav ? (
                  <FavButton onClick={handleFavorite}>❤️</FavButton>
               ) : (
                  <FavButton onClick={handleFavorite}>🤍</FavButton>)
               }
               {location.pathname === '/home' ? <ButtonX onClick={handleClick} value={props.id}>X</ButtonX> : null}
            </CrossFav>
            <Link to={`/detail/${props.id}`}><Name>{longNames()}</Name></Link>
         </CardHeader>
         <Link to={`/detail/${props.id}`} >
            <ImgCard src={props.image} alt={props.name} />
            <Atributes>
               <Span>{props.species}</Span>
               <Span>{props.gender}</Span>
            </Atributes>
         </Link>   
      </CardDiv>
   );
}

//importa el store.dispatch
//retorna un objeto con funciones que despachan acciones
//a las props del componente
function mapDispatchToProps(dispatch){
 return {
   addFavorite: (character) => {dispatch(addFavorite(character))},
   deleteFavorite: (id)=> {dispatch(deleteFavorite(id))}
 }
}

//importa el state
//retorna un objeto con las propiedades del estado que voy a utilizar en mi componente
//a las props del componente
function mapStateToProps(state){
  return {allCharacters: state.allCharacters}
}


//SIEMPRE SE EXPORTA DEFAULT EL CONNECT
//es la copia de mi componente
//connect recibe dos parametros el primero siempre es mapState el segundo mapDispatch
//connect devuelve una funcion que se invoca inmediatamente con el componente y devuelve una copia del componente
export default connect(mapStateToProps, mapDispatchToProps)(Card)