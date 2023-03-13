import React from 'react'
import styled from 'styled-components'
import Section from '../Home/Section'
import Carousel from '../Sub-Components/Carousel'
import Dashboard from '../Sub-Components/Dashboard'

function NSX() {
  return (
    <div>
      <Container>
        <Section
          title="Honda NSX"
          description="One of a Kind"
          backgroundImg="NSX/NSX.jpg"
          flag="exists"
        />
        <Wrap>
          <Description>
            <h2>Honda NSX</h2>
            <p>
              Started in 1984, based from the HP-X concept.
              Designed by Masahito Nakano with aerodynamics inspired by an F-16 fighter jet.
              Inputs were also given by the late F1 legend Ayrton Senna for the design of the car.
              A two-seater sports car with pop-up headlights and manual or automatic transmissions based on the user's choice.
            </p>
          </Description>
          <Dashboard
            engine="3 Litre C30A V6"
            topSpeed="170 mph"
            torque="7300 rpm"
            power="270-290 bhp"
            transmissions="4-speed automatic 5-speed manual 6-speed manual"
          />
        </Wrap>
        <Carousel
          image1="/images/NSX/NSX-Back.jpeg"
          image2="/images/NSX/NSX-Side.jpg"
          image3="/images/NSX/NSX-Interior.jpg"
          image4="/images/NSX/NSX-Engine.jpg"
        />
      </Container>
    </div>
  )
}

export default NSX

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
