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
            image= 'https://pbs.twimg.com/profile_images/2856295053/ab23901d3aee5ff219fb07c7db959fd8_400x400.jpeg'
            id='1000'
            />
      </Div>
  )
}

export default About