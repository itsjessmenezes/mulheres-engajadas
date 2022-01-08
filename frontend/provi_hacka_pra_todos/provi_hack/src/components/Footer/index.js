import instagram from '../../assets/instagram-icon.svg';
import github from '../../assets/github-icon.svg';
import twitter from '../../assets/twitter-icon.svg';

import { FooterContainer, DivFooterLeft, DivFooterRight, DivFooterSpan, SocialIcon } from './styled';

const Footer = () => {

  return (
    <FooterContainer>
      <DivFooterLeft>
        <DivFooterSpan>Mulheres Engajadas</DivFooterSpan>
      </DivFooterLeft>

      <DivFooterRight>
        <SocialIcon src={instagram} />
        <SocialIcon src={github} />
        <SocialIcon src={twitter} />
      </DivFooterRight>
    </FooterContainer>
  )
}

export default Footer;