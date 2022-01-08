import React from "react";
import { CardContainer, CardContainerImage, CardImage, CardInfo, CardInfoParag, CardInfoText } from './style';

const CardAbilities = ({ img, titulo, texto }) => {
  return (
    <CardContainer>
      <CardContainerImage>
        <CardImage src={img} alt={`${titulo}`} />
      </CardContainerImage>
      <CardInfo>
        <CardInfoText>{titulo}</CardInfoText>
        <CardInfoParag>{texto}</CardInfoParag>
      </CardInfo>
    </CardContainer>
  )
}

export default CardAbilities;