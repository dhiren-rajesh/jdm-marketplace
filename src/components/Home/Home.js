import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section
          title="Honda NSX"
          description="One of a Kind"
          backgroundImg="NSX/NSX.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
          flag="exists"
        />
        <Section
          title="Toyota Supra MK4"
          description="Top Secret"
          backgroundImg="Supra/Supra.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
          flag="exists"
        />
        <Section
          title="Nissan Skyline GTR R34"
          description="Drive like Brian"
          backgroundImg="Skyline/Skyline.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
          flag="exists"
        />
        <Section
          title="Mazda RX-7 FD"
          description="The Monalisa"
          backgroundImg="RX7/RX7.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
          flag="exists"
        />
        <Section
          title="Mitsubushi Lancer Evolution IX"
          description="Own the Road"
          backgroundImg="EvoIX/EvoIX.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
          flag="exists"
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`