import React from 'react'
import styled from 'styled-components'
import { Fade } from 'react-reveal'

function Section({title, description, backgroundImg, leftBtnText, rightBtnText, flag}) {
  return (
    <Wrap bgImg={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
              {leftBtnText &&
                <LeftButton>
                    {leftBtnText}
                </LeftButton>
              }
              {rightBtnText &&
                <RightButton>
                    {rightBtnText}
                </RightButton>
              }
          </ButtonGroup>
        </Fade>
        {flag && <DownArrow src="/images/icons/down-arrow.svg"/>}
      </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size:cover;
    background-position: center;
    background-repeat: not-repeat;
    background-image:${props => `url("/images/${props.bgImg}")`};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    color : white;
`

const Buttons = styled.div`
  display :flex;
  flex-direction :column;
  justify-content : center; 
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px){
      flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23,26,32,0.8);
    height: 40px;
    width: 250px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 15px;
    cursor: pointer;
    margin: 10px;
`

const RightButton = styled(LeftButton)`
    background-color: white;
    opacity: 0.65;
    color: black;
`

const DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
`