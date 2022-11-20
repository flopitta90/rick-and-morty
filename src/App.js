import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav.jsx'
import { useState, useEffect} from 'react'
import {Routes, Route, useLocation} from 'react-router-dom'
import About from './components/About.jsx'
import Detail from './components/Detail.jsx'
import Form from './components/Form.jsx'
import {useNavigate} from 'react-router-dom'
import Favorites from './components/Favorites.jsx'
import { AboutFlorencia } from './components/AboutFlorencia'



function App () {

  const [characters, setCharacters] = useState([])
  
  const location = useLocation()

  const navigate = useNavigate()

  const [access, setAccess] = useState(false)
  const username = 'ejemplo@gmail.com'
  const password= '123flor'

  function login(userData) {
    if (userData.password === password && userData.username.toLowerCase() === username){
      setAccess(true);
      navigate('/home');
    }
  }

  useEffect(() => {
    !access && navigate('/');
  }, [access, navigate]);
  
  const onSearch = (character) => {
    const chars = [...characters];
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (chars.find((char) => char.id === data.id)) {
          window.alert("El personaje ya esta agregado");
        } else if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
     });
  };

  const onClose = (id) => {
    setCharacters(characters.filter(char => char.id !== id))
  }



  return (
    <div>
     {location.pathname === '/' ? null : <Nav onSearch={onSearch}/>}
      <Routes>
          <Route path='/' element={<Form login={login} />}/>
          <Route path='/home' element={<Cards characters={characters} id={characters.id} onClose={onClose}/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
          <Route path='/favorites' element={<Favorites/>}/>
          <Route path='/detail/1000' element={<AboutFlorencia/>}/>
      </Routes>
    </div>

  )
}

export default App
