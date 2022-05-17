import styled from "styled-components";
import { Link } from "react-router-dom";


export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "45vh" : "80px")};
  background-color: white;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid grey;
  
  @media (min-width: 860px) {
    height: 80px;
  }
`;

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;


export const NavbarLink = styled(Link)`
  color: black;
  font-size: large;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-decoration: none;
  margin: 15px;
  font-weight: bold;
  &:hover{
    color: grey;
    text-decoration: underline;
    transform: scale(1.05);
  }
  
  @media (max-width: 860px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(Link)`
  color: black;
  font-size: large;
  font-weight: bold;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-decoration: none;
  margin: 10px;
  z-index: 500;
  &:hover{
    color: grey;
    text-decoration: underline;
    transform: scale(1.05);
  }
`;

export const Logo = styled.img`
  margin: 10px;
  max-width: 180px;
  height: auto;
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: black;
  font-size: 37px;
  cursor: pointer;

  @media (min-width: 860px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 860px) {
    display: none;
  }
`;
