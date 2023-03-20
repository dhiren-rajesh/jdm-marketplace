import React from 'react'
import styled from 'styled-components'
import Section from '../Home/Section'
import Dashboard from '../Sub-Components/Dashboard'
import Slides from '../Sub-Components/Slides'

function Supra() {
  return (
    <div>
      <Container>
        <Section
          title="Toyota Supra MK4"
          description="Top Secret"
          backgroundImg="Supra/Supra.jpg"
          flag="exists"
        />
        <Wrap>
          <Description>
            <h2>Toyota Supra MK4</h2>
            <p>
              The 4th generation legend made by Toyota.
              Designed by Isao Tsuzuki and produced between '93-'02.
              Works on both automatic and manual transmissions 
              to provide the necessary comfort and speed to the driver.
            </p>
          </Description>
          <Dashboard
            engine="5 Litre Twin-Turbo V12"
            topSpeed="222 mph"
            torque="7300 rpm"
            power="900 bhp"
            transmissions="4-speed automatic 5-speed manual 6-speed manual"
          />
        </Wrap>
        <Slides
          image1="images/Supra/Supra-Back.jpg"
          image2="images/Supra/Supra-Side.jpg"
          image3="images/Supra/Supra-Interior.jpg"
          image4="images/Supra/Supra-Engine.jpg"
        />
      </Container>
    </div>
  )
}

export default Supra

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