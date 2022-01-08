import styled from 'styled-components';

export const DivHeader = styled.div`
    background: var(--primary-color);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 20px;

    color: #fff;
    font-family: 'Nunito', sans-serif;
    
`

export const DivHeaderLeft = styled.span`
  `
export const DivHeaderSpan = styled.span`
  font-size: 20px;
  font-weight: 700;
  `;

export const Ancora = styled.a`
  text-decoration: none;
  color: #fff;
  margin-right: 10px;
`;

export const DivHeaderRigth = styled.div`
    display:flex;
    align-items: center;
    `

export const DivHeaderRigthSignUp = styled.div`
background-color: #B53030;
border-radius: 10px;
display: flex;
align-items: center;
`

export const Button = styled.button`
all: unset;
box-sizing: 'border-box';
background: #B53030;
padding: 14px 30px;
font-size: 18px;
font-weight: bold;
border-radius: 5px;
&:hover {
  cursor: pointer;
}
`;