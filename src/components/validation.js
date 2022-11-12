const [valEmail, valPassword ] = [/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,10}$/ ]

 const validate = (userData) =>{
    let errors = {};
    if(userData.username.length > 35) {
      errors.username = 'El email no puede contener mas de 35 caracteres'
    }

    if(!valEmail.test(userData.username)){
      errors.username ='El username debe ser un correo electrónico'
    }

    if(!valPassword.test(userData.password)){
      errors.password = 'El password debe contener entre 6 y 10 caracteres y al menos un numero'
    }
    
  
  return errors
  }


  export default validate