import React from 'react'
import styled from 'styled-components'

function Dashboard({ engine, topSpeed, torque, power, transmissions }) {
  return (
    <Wrap>
        <table>
            <tr>
                <td><ImgIcon src="/images/icons/engine-motor-svgrepo-com.svg"/></td>
                <td>Engine Type</td>
                <td>{engine}</td>
            </tr>
            <tr>
                <td><ImgIcon src="/images/icons/speed-svgrepo-com.svg"/></td>
                <td>Top Speed</td>
                <td>{topSpeed}</td>
            </tr>
            <tr>
                <td><ImgIcon src="/images/icons/spanner-svgrepo-com.svg"/></td>
                <td>Torque</td>
                <td>{torque}</td>
            </tr>
            <tr>
                <td><ImgIcon src="/images/icons/power-svgrepo-com.svg"/></td>
                <td>Power Output</td>
                <td>{power}</td>
            </tr>
            <tr>
                <td><ImgIcon src="/images/icons/gear-stick-pattern-svgrepo-com.svg"/></td>
                <td>Transmissions</td>
                <td>{transmissions}</td>
            </tr>
        </table>
    </Wrap>
  )
}

export default Dashboard


const Wrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    td{
        padding: 10px;
    }
    border-left: 1px solid grey;
    table{
        padding-left: 50px;
    }
`

const ImgIcon = styled.img`
    height: 30px;
`
