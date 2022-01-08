import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DivHeader, DivHeaderLeft, DivHeaderSpan, Ancora, DivHeaderRigth, DivHeaderRigthSignUp, Button } from './styled';

const Header = () => {
  const navigate = useNavigate()
  const goToCadastro = () => {
    navigate('/cadastro')
  }
  return (
    <DivHeader>
      <DivHeaderLeft>
        <DivHeaderSpan>Mulheres Engajadas</DivHeaderSpan>
      </DivHeaderLeft>

      <DivHeaderRigth>
        <DivHeaderSpan><Ancora href="">Cidade</Ancora></DivHeaderSpan>
        <DivHeaderSpan><Ancora href="">Quem Somos</Ancora></DivHeaderSpan>
        <DivHeaderSpan><Ancora href="">Login</Ancora></DivHeaderSpan>
        <Button onClick={goToCadastro}>Cadastre-se</Button>
      </DivHeaderRigth>
    </DivHeader>
  )
}

export default Header;