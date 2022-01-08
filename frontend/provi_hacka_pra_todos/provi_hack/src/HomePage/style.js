import styled from 'styled-components';
import volunteerBg from '../assets/volunteer-bg.png';


export const GeneralContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 100%;
`;

export const ContainerHero = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 100px;
`;

export const HeroText = styled.h1`
  position: absolute;
  width: 964px;
  color: #ffffff;
  margin: 0;
  margin-bottom: 22px;
  margin-left: 90px;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 60px;
`;

export const ContainerBePart = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
  align-items: center;
`;

export const ButtonLearn = styled.button`
  all: unset;
  box-sizing: 'border-box';

  background: var(--primary-color);
  width: 500px;
  margin-bottom: 60px;
  padding: 30px 20px;
  border-radius: 20px;
  
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

export const AbilitiesDisplay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const CourseDisplay = styled.div`
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
  `;

export const ArrowRight = styled.img`
width: 50px;
`;

export const ArrowLeft = styled.img`
  width: 50px;
  margin-right: 20px;
`;

export const BecameVolunteer = styled.div`
background-image: url(${volunteerBg});
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 100px 60px;
margin-bottom: 100px;
`;


export const VolunteerTitle = styled.span`
 font-size: 36px;
 font-weight: bold;
 color: #fff;
 margin-bottom: 30px;
 
 `;

export const VolunteerSubtitle = styled.span`
  width: 800px;
  margin-bottom: 60px;

  color: #fff;
  font-size: 28px;
  text-align: justify;

`;

export const VolunteerButton = styled.button`
  all: unset;
  box-sizing: 'border-box';

  background: #fff;
  width: 500px;
  height: 90px;
  border-radius: 20px;

  color: var(--primary-color);
  font-size: 36px;
  font-weight: 900;
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`;

export const ContainerLocationVolunteer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 100px;
`;
