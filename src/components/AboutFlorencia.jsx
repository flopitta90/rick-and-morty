import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Volver , DivDetail} from './Detail'

export const AboutFlorencia = () => {
   
  const navigate = useNavigate()
  function backToHome (){
    navigate('/home')
  }

  return (
    <div>
    <DivDetail>
       <div>
          <h1>Florencia Conforti</h1>
          <h4>Status: Alive </h4>
          <h4>Specie: Human </h4>
          <h4>Gender: Female</h4>
          <h4>Origin: Earth</h4>
          <h4>Fullstack developer student from Henry</h4>
       </div>
       <img width='400px' src='https://scontent.fsvq2-1.fna.fbcdn.net/v/t31.18172-8/16665941_10212363017616319_470226629075681926_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=XjAcH73Fmm0AX8hj83t&_nc_ht=scontent.fsvq2-1.fna&oh=00_AfBB_vv4Vkbc0GTPwgx2om2gcIb9Ncgic2qPwIQHK4lgTQ&oe=63977063'/>
    </DivDetail>
    <Volver onClick={ backToHome }>volver</Volver>
 </div>
  )
}
