import React from 'react'
import styled from 'styled-components'
import Section from '../Home/Section'
import Carousel from '../Sub-Components/Carousel'
import Dashboard from '../Sub-Components/Dashboard'

function EvoIX() {
  return (
    <div>
      <Container>
        <Section
          title="Mitsubushi Lancer Evolution IX"
          description="Own the Road"
          backgroundImg="EvoIX/EvoIX.jpg"
          flag="exists"
        />
        <Wrap>
          <Description>
            <h2>Mitsubushi Lancer Evolution IX</h2>
            <p>
              Designed by Omer Halilhodzic, this machine runs on a Inline-4 engine.
              Unlike the previous generations very subtle changes have been made to the car
              which help to increase the pace and handling of it,
              making it comparitively suitable for new gen JDM users.
            </p>
          </Description>
          <Dashboard
            engine="2.0 L 4G63 Inline 4 Turbocharged"
            topSpeed="155 mph"
            torque="6500 rpm"
            power="287 bhp"
            transmissions="6-speed manual 5-speed manual 5-Speed F5A5 automatic"
          />
        </Wrap>
        <Carousel
          image1="/images/EvoIX/EvoIX-Back.jpg"
          image2="/images/EvoIX/EvoIX-Side.jpg"
          image3="/images/EvoIX/EvoIX-Interior.jpg"
          image4="/images/EvoIX/EvoIX-Engine.jpg"
        />
      </Container>
    </div>
  )
}

export default EvoIX

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