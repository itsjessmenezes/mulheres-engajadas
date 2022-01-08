import styled from "styled-components"


export const CardContainer = styled.div`
    display:flex;
    width: 500px;
    height: 200px;
    background-color: #EF6F7E;
    border-radius: 20px;
    padding: 20px 30px;
    margin: 20px;

    color: #fff;
    `

export const CardContainerImage = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  `

export const CardImage = styled.img`
  width: 140px;
`

export const CardInfo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`;

export const CardInfoText = styled.h1`
font-size: 36px;
font-weight: 900;
margin: 0;
`

export const CardInfoParag = styled.p`
width: 270px;
margin: 0;
font-size: 20px;
font-weight: 300;
`
