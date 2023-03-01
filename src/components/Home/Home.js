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
        />
        <Section
          title="Toyota Supra MK4"
          description="Top Secret"
          backgroundImg="Supra.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />
        <Section
          title="Nissan Skyline GTR"
          description="Brian's Favorite"
          backgroundImg="Skyline.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />
        <Section
          title="Honda RC213V"
          description="Marc Speed"
          backgroundImg="RC213V.jpg"
          leftBtnText="Order Now"
          rightBtnText="Learn More"
        />
        <Section
          title="Yamaha YZR-M1"
          description="Rosy like Rossi"
          backgroundImg="YZR-M1.jpg"
          leftBtnText="Order Now"
          rightBtnText="Learn More"
        />
        <Section
          title="Kawasaki Ninja H2R"
          description="Built Beyond Belief"
          backgroundImg="H2R.jpg"
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
