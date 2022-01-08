import React from "react";

import womanWork from '../assets/woman-work.png';
import bePart from '../assets/be-part.png';
import findCourse from '../assets/find-course.png';
import transformYourself from '../assets/transform.png';
import share from '../assets/share.png';
import design from '../assets/design.png';
import socialMedia from '../assets/social-media-marketing.png';
import devMobile from '../assets/dev-mobile.png';
import arrowRight from '../assets/arrow-right.svg';
import arrowLeft from '../assets/arrow-left.svg';
import location from '../assets/location.png';
import beVolunteer from '../assets/be-volunteer.png';


import Header from "../components/Header";
import CardCourse from "../components/CardCourse";
import CardAbilities from "../components/CardAbilities";
import Footer from "../components/Footer";


import {
  GeneralContainer,
  Image,
  AbilitiesDisplay,
  ContainerBePart,
  ButtonLearn,
  ContainerHero,
  CourseDisplay,
  HeroText,
  ArrowRight,
  ArrowLeft,
  BecameVolunteer,
  VolunteerTitle,
  VolunteerSubtitle,
  VolunteerButton,
  ContainerLocationVolunteer

} from './style';


const HomePage = () => {
  const descriptionCard = [
    {
      img: bePart,
      titulo: "Faça Parte",
      texto: "Amplie suas oportunidades com os cursos que oferecemos",
    },
    {
      img: findCourse,
      titulo: "Encontre seu curso",
      texto: "Procure o curso que você se identifca",
    },
    {
      img: transformYourself,
      titulo: "Transforme-se",
      texto: "Conhecimento é o primeiro passo para sua transformação",
    },
    {
      img: share,
      titulo: "Compartilhe",
      texto: "Com sua ajuda, mais mulheres podem ser impactadas",
    },
  ];

  const locationCard = [
    {
      img: location,
      titulo: "Pontos de apoio",
      texto: "Ajude-nos a estruturar esta ideia. Com pouco fazemos muito.",
    },
    {
      img: beVolunteer,
      titulo: "Seja um voluntário",
      texto: "Nos ajude com o seu conhecimento. Juntos podemos fazer a diferença",
    },
  ];
  return (
    <GeneralContainer>
      <Header />
      <ContainerHero>
        <HeroText>Mulheres engajadas conectadas ao conhecimento</HeroText>
        <Image src={womanWork} alt="Mulheres Engajadas" />
      </ContainerHero>

      <ContainerBePart>
        <ButtonLearn>Veja o que você pode aprender</ButtonLearn>
        <AbilitiesDisplay>
          {
            descriptionCard.map(card => (
              <CardAbilities img={card.img} titulo={card.titulo} texto={card.texto} />
            ))
          }
        </AbilitiesDisplay>
      </ContainerBePart>

      <CourseDisplay>
        <ArrowLeft src={arrowLeft} />
        <CardCourse
          img={socialMedia}
          titulo={"Marketing Digital"}
          tutor={"Bruna Dias"}
          texto={"Se você é criativo, ligado em tecnologia e artes visuais venha fazer parte da construção do nosso website."}

        />
        <CardCourse
          img={devMobile}
          titulo={"Desenvolv. Mobile"}
          tutor={"Larissa Faria"}
          texto={"Se você é criativo, ligado em tecnologia e artes visuais venha fazer parte da construção do nosso website."}
        />
        <CardCourse
          img={design}
          titulo={"Web Design"}
          tutor={"Ruan Lopes"}
          texto={"Se você é criativo, ligado em tecnologia e artes visuais venha fazer parte da construção do nosso website."}
        />
        <ArrowRight src={arrowRight} />
      </CourseDisplay>

      <BecameVolunteer>
        <VolunteerTitle>Bem vinde ao Mulheres Engajadas!</VolunteerTitle>
        <VolunteerSubtitle>Nosso intuito é conectar mulheres de baixa renda a pessoas voluntárias através do conhecimento, ofertando cursos, palestras, conteúdos diversos principalmente tecnológicos</VolunteerSubtitle>
        <VolunteerButton>Junte-se ao nosso time</VolunteerButton>
      </BecameVolunteer>

      <ContainerLocationVolunteer>
        {
          locationCard.map(card => (
            <CardAbilities img={card.img} titulo={card.titulo} texto={card.texto} />
          ))
        }
      </ContainerLocationVolunteer>

      <Footer />
    </GeneralContainer>
  )
}

export default HomePage;