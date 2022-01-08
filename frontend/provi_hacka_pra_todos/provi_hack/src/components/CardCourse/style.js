import styled from "styled-components"

export const Card = styled.div`
  background-color: #ffffff;
  display: flex;
  width: 300px;
  flex-direction: column;
  margin-right: 20px;
  margin-bottom: 60px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  padding-bottom: 20px;
`
export const CardImageContainer = styled.div`

`
export const CardImage = styled.img`
width: 300px;
height: 190px;
border-top-left-radius: 25px;
border-top-right-radius: 25px;
`


export const CardContainerInfo = styled.div`
padding: 0px 20px;
`;

export const CardTitleContainer = styled.div`
  padding-top: 30px;
`
export const CardTitle = styled.h1`
font-size: 26px;
margin: 0;
`
export const CardSubtitle = styled.span`
`;

export const CardTextContainer = styled.div`
  margin-bottom: 30px;
`;
export const CardText = styled.p`
`;

export const CardFooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  `;

export const CardFooterLocation = styled.div`
display: flex;
`;

export const CardLocation = styled.img`
  width: 20px;
  margin-right: 10px;
`;
export const CardCity = styled.span`
  color: #747272;
`;

export const CardFooterCalendar = styled.div`
background: #EF5350;
border: 1px solid #EF5350;
box-sizing: border-box;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px;
padding: 5px 10px;
display: flex;
align-items: center;
`;
export const CardCalendar = styled.img`
width: 15px;
margin-right: 5px;
`;

export const CardCalendarSpan = styled.span`
font-weight: bold;
font-size: 10px;
line-height: 14px;

color: #FFFFFF;
`;