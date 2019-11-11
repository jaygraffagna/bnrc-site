import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.footer`
  position: relative;
  padding-top: 2rem;
  bottom: 0;
  box-shadow: ${props => props.theme.shadow.footer};
  background: ${props => props.theme.gradient.leftToRight};
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
`;

const Text = styled.div`
  margin: 0;
  padding-top: 1rem;
  padding-bottom: 1rem;
  text-align: center;
  color: ${props => props.theme.colors.white.light};
`;

const SocialWrapper = styled.div`
  text-align: center;
`;

const Social = styled.button`
  background-color: transparent;
  color: ${props => props.theme.colors.white.light};
  border: 2px solid ${props => props.theme.colors.white.light};
  border-radius: 8px;
  width: 30px;
  font-size: 16pt;
  font-weight: bold;
  outline: none;
  cursor: pointer;
`;



const Footer = () => (
  <Wrapper>
    <SocialWrapper>
      <Social onClick={() => window.open('https://www.facebook.com/BettNaturalResources')}>f</Social>
    </SocialWrapper>
    <Text>
        Bettendorf Natural Resources Committee
    </Text>
  </Wrapper>
);
export default Footer;
