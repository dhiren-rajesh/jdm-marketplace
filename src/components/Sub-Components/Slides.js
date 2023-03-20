import React from 'react'
import styled from 'styled-components'

function Slides({image1, image2, image3, image4}) {
  return (
    <Container>
        <Wrap>
            <img src={image1} alt="back"/>
            <img src={image2} alt="side"/>
        </Wrap>
        <Wrap>
            <img src={image3} alt="interior"/>
            <img src={image4} alt="engine"/>
        </Wrap>
    </Container>
  )
}

export default Slides

const Container = styled.div`
    margin: 0 50px;
`

const Wrap = styled.div`
   img{
    width: 650px;
    height: 450px;
   }
`
