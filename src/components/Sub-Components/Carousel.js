import React from 'react'
import styled from 'styled-components'

function Carousel({image1, image2, image3, image4}) {
  return (
    <Container>
        <Wrap>
            <img src={image1} alt=""/>
            <img src={image2} alt=""/>
        </Wrap>
        <Wrap>
            <img src={image3} alt=""/>
            <img src={image4} alt=""/>
        </Wrap>

    </Container>
  )
}

export default Carousel

const Container = styled.div`
`

const Wrap = styled.div`
    display: flex;
    justify-content: center;
    img{
        height: 400px;
        width: 550px;
        margin: 30px;
    }
`
