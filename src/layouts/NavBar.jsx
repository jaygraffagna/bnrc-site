import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Headroom from 'react-headroom';

const StyledLink = styled(Link)`
  display: flex;
  font-weight: 700;
  align-items: center;

  color: ${props => props.theme.colors.white.base};
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  font-size: 1.1rem;
  a {
    color: ${props => props.theme.colors.white.base};
    margin-left: 1rem;
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color: ${props => props.theme.colors.white.grey};
    }
  }
`;

const NavBar = () => {
  if(window.screen.availWidth > 700){
    return (
      <Headroom calcHeightOnResize disableInlineStyles>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/purpose">Purpose</Link>
          <Link to="/about">About</Link>
        </Nav>
        <StyledLink to="/">
          <h1>BNRC</h1>
        </StyledLink>
      </Headroom>
    )
  }
  return (
  <Headroom calcHeightOnResize disableInlineStyles>
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/purpose">Purpose</Link>
      <Link to="/about">About</Link>
    </Nav>
  </Headroom>
)};

export default NavBar;
