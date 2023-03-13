import React from 'react'
import styled from 'styled-components'
import Section from '../Home/Section'
import Carousel from '../Sub-Components/Carousel'
import Dashboard from '../Sub-Components/Dashboard'

function Skyline() {
  return (
    <div>
      <Container>
        <Section
          title="Nissan Skyline GTR R34"
          description="Drive like Brian"
          backgroundImg="Skyline/Skyline.jpg"
          flag="exists"
        />
        <Wrap>
          <Description>
            <h2>Nissan Skyline GTR R34</h2>
            <p>
              Designed by Kozo Watanabe, this turbo charged classic 
              just provides a different feel for drivers. 
              A two seater dream car for many, providing only manual transmissions
              the car is able to hit upto 165 mph. 
            </p>
          </Description>
          <Dashboard
            engine="2.6 L twin-turbocharged RB26DETT I6"
            topSpeed="165 mph"
            torque="7000 rpm"
            power="275 bhp"
            transmissions="6-speed Getrag 233 manual"
          />
        </Wrap>
        <Carousel
          image1="/images/Skyline/Skyline-Back.jpg"
          image2="/images/Skyline/Skyline-Side.jpg"
          image3="/images/Skyline/Skyline-Interior.jpg"
          image4="/images/Skyline/Skyline-Engine.jpg"
        />
      </Container>
    </div>
  )
}

export default Skyline

const Container = styled.div`
`

const Wrap = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 30px;
`

const Description = styled.div`
  flex: 0.8;
  text-align: justify;
  padding: 10px;
  p{
    margin-top: 15px;
  } 
`