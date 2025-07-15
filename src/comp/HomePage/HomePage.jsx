import React from 'react'
import { Content, Heading, HomeIcon, HomeInformation, HomePageContent, HomePageEntireContainer, HomePageIcon, Para, Styles, } from './HomePage.styled'
import Navbar from '../common/navbar/Navbar'

const HomePage = () => {
  return (
    <HomePageEntireContainer>
        <Navbar/>
        <Content>

        
        <HomePageContent>
          <HomeInformation>
            <Styles>
            <Heading>Clothes That Get YOU Noticed</Heading>
            <Para>Fashion is part of the daily air and it does not quite help that it changes all the time. Clothes have always been a marker of the era and we are in a revolution. Your fashion makes you been seen and heard that way you are. So, celebrate the seasons new and exciting fashion in your own way.</Para>
         
         </Styles>
          </HomeInformation>
          <HomeIcon>
            <HomePageIcon src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png " />
          </HomeIcon>
        </HomePageContent>
        </Content>


        

       
    </HomePageEntireContainer>

  )
}

export default HomePage
