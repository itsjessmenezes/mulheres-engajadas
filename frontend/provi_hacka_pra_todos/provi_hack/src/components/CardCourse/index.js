import React from "react";
import location from "../../assets/location.svg"
import calendar from "../../assets/calendar.svg"
import { CardImage, Card, CardContainerInfo, CardCalendar, CardCalendarSpan, CardFooterCalendar, CardCity, CardFooterContainer, CardImageContainer, CardLocation, CardText, CardTextContainer, CardTitle, CardSubtitle, CardTitleContainer, CardFooterLocation } from './style';

const CardCourse = (props) => {

  return (
    <Card>
      <CardImageContainer>
        <CardImage src={props.img} alt="" />
      </CardImageContainer>

      <CardContainerInfo>
        <CardTitleContainer>
          <CardTitle>{props.titulo}</CardTitle>
          <CardSubtitle>{props.tutor}</CardSubtitle>
        </CardTitleContainer>

        <CardTextContainer>
          <CardText>{props.texto}</CardText>
        </CardTextContainer>

        <CardFooterContainer>
          <CardFooterLocation>
            <CardLocation src={location} alt="Localização" />
            <CardCity>Belo Hori...</CardCity>
          </CardFooterLocation>

          <CardFooterCalendar>
            <CardCalendar src={calendar} alt="Calendario" />
            <CardCalendarSpan>03/12/2021</CardCalendarSpan>
          </CardFooterCalendar>
        </CardFooterContainer>
      </CardContainerInfo>
    </Card>
  )
}

export default CardCourse;