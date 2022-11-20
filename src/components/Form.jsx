import React from 'react'
import styled from 'styled-components'
import validate from './validation.js'
import { useState } from 'react'

const Background = styled.div` 
  display: flex ;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10%;
`
const FormLogin = styled.form`
  color: white;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400px;
  width: 500px;
  background-color: #131318;
  border-radius: 20px;
  box-shadow: 0 0 20px #39fae0;
  @media screen and (max-width: 960px){
    width: 400px;
  }
`
const SubmitButton = styled.button`
 background-color: #19c1a8;
 border-radius: 5px;
 border: none;
 padding: 5px;
 font-size: medium;
&:hover{
   background-color: rgb(0, 0, 0, 0.75);
   color: white;  
   cursor: pointer;
}
`
const Errors= styled.p`
  color: #f94444;
  font-size: small;
  justify-content: center;
  margin: 10px 20px;
`


const Form = (props) => {
    const [userData, setUserData] = useState({
         username: '', 
         password: '' });

    const [errors, setErrors] = useState({
            username: '', 
            password: '' });    

    const handleChange = (event) => {
        setUserData({...userData,
            [event.target.name]: event.target.value,
        })
        setErrors(
            validate({...userData,
            [event.target.name]: event.target.value 
        }))
    }    
    
    function handleSubmit (evento){
      evento.preventDefault()
      if(Object.keys(errors).length === 0){
        props.login(userData)
      }
      else alert('Debes ingresar los datos correctamente')
    }

  return (
    <Background>
        <FormLogin onSubmit={handleSubmit}>
        <img height='190px'src="https://w0.peakpx.com/wallpaper/940/144/HD-wallpaper-rick-and-morty-logo-ultra-cartoons-others-logo-rickandmorty.jpg"/> 
         <label>Username:</label>
         <input value={userData.username}
         name='username'
         type="text"
         onChange={handleChange} />
         <Errors>{errors.username}</Errors>
         <label>Password:</label>
         <input value={userData.password}
         name='password'
         type="password"
         onChange={handleChange} />
         <Errors>{errors.password}</Errors>
         <SubmitButton type='submit'>Log in</SubmitButton>
        </FormLogin>
    </Background>

  )
}

export default Form
