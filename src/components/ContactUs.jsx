import React from 'react';
import styled from '@emotion/styled';

const ContactUsWrapper = styled.div`
  padding-top:1rem;
  padding-bottom:0rem;
  text-align: center;
`;

const ContactUsButton = styled.button`
  background: ${props => props.theme.gradient.leftToRight};
  color: ${props => props.theme.colors.white.light};
  border: 2px solid ${props => props.theme.colors.white.light};
  border-radius: 8px;
  font-size: 16pt;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  width: 200px;
  height: 50px;
`;



const ContactUs = () => (
    <ContactUsWrapper>
      <ContactUsButton onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSfxe8-im2PvxV8pWSOGxJV9hrA1VFytLCulP6x8oU6fsbnZ6g/viewform?usp=sf_link")}>Contact Us</ContactUsButton>
    </ContactUsWrapper>
);
export default ContactUs;
