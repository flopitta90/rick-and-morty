import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Volver , DivDetail} from './Detail'
import linkedIn from '../img/linkedin.png'
import gitHub from '../img/github.png'
import styled from 'styled-components'

const IconsDiv=styled.div`
  background-color: #93f566;
  width: 80px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  margin-bottom: 20px;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Name= styled.h1`
  color:#93f566;
`

const Link= styled.a`
  text-decoration: none;
`

export const AboutFlorencia = () => {
   
  const navigate = useNavigate()
  function backToHome (){
    navigate('/home')
  }

  return (
    <div>
    <DivDetail>
       <div>
          <Name>Florencia Conforti</Name>
          <h4>Status: Alive </h4>
          <h4>Specie: Human </h4>
          <h4>Gender: Female</h4>
          <h4>Origin: Earth</h4>
          <h4>Fullstack developer student from Henry</h4>
         <Container>
         <IconsDiv>
          <Link target ='_blank' href='https://www.linkedin.com/in/florencia-conforti'><img alt= 'linkedin-icon'src={linkedIn}/> </Link>
          <Link target ='_blank' href='https://github.com/flopitta90' ><img  alt= 'github-icon'src={gitHub}/></Link>
          </IconsDiv>
          </Container>
       </div>
       <img width='400px' alt='Florencia' src='https://scontent.fsvq2-1.fna.fbcdn.net/v/t31.18172-8/16665941_10212363017616319_470226629075681926_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=XjAcH73Fmm0AX8hj83t&_nc_ht=scontent.fsvq2-1.fna&oh=00_AfBB_vv4Vkbc0GTPwgx2om2gcIb9Ncgic2qPwIQHK4lgTQ&oe=63977063'/>
    </DivDetail>
    <Volver onClick={ backToHome }>volver</Volver>
 </div>
  )
}
