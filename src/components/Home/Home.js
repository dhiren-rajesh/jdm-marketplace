import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section
          title="Honda NSX"
          description="One of a Kind"
          backgroundImg="NSX.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
          flag="exists"
        />
        <Section
          title="Toyota Supra MK4"
          description="Top Secret"
          backgroundImg="Supra.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
          flag="exists"
        />
        <Section
          title="Nissan Skyline GTR R34"
          description="Drive like Brian"
          backgroundImg="Skyline.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
          flag="exists"
        />
        <Section
          title="Mazda RX-7 FD"
          description="The Monalisa"
          backgroundImg="RX7.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
          flag="exists"
        />
        <Section
          title="Mitsubushi Lancer Evolution IX"
          description="Own the Road"
          backgroundImg="EvoIX.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
          flag="exists"
        />
        <Section
          title="Yamaha YZR-M1"
          description="Revs Your Hearts"
          backgroundImg="YZRM1.jpg"
          leftBtnText="Order Now"
          rightBtnText="Learn More"
        />
        <Section
          title="Honda RC213V-S"
          description="Shining Future"
          backgroundImg="RC213VS.jpg"
          leftBtnText="Order Now"
          rightBtnText="Learn More"
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`