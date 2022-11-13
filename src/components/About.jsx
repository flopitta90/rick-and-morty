import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const Div= styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  margin: 5%;
  
`

const AboutContainer = styled.div`
  color: white;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400px;
  width: 500px;
  background-color: #131318;
  border-radius: 20px;
  `
  

const About = () => {
  return (
      <Div>
        <Card 
            key='1000'
            name='Florencia Conforti'
            species='Human' 
            gender='Female'
            image= 'https://scontent.fsvq2-1.fna.fbcdn.net/v/t31.18172-8/16665941_10212363017616319_470226629075681926_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=XjAcH73Fmm0AX8hj83t&_nc_ht=scontent.fsvq2-1.fna&oh=00_AfBB_vv4Vkbc0GTPwgx2om2gcIb9Ncgic2qPwIQHK4lgTQ&oe=63977063'
            id='1000'
            />
      </Div>
  )
}

export default About

//https://pbs.twimg.com/profile_images/2856295053/ab23901d3aee5ff219fb07c7db959fd8_400x400.jpeg