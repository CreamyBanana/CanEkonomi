import styled from "styled-components";

export const HemContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const LogoTextContainer = styled.div`
  align: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;

export const TextContainer = styled.div`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
  font-family: 'Urbanist', sans-serif;
  font-weight: bold;
  font-size: x-large;
  resize: none;
  height: 210px;
  width: 765px;
  line-height: 1.5;
  color: #333333;
  
  @media (max-width: 769px) {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    font-family: 'Urbanist', sans-serif;
    font-weight: bold;
    font-size: large;
    resize: none;
    width: 600px;
    line-height: 1.5;
    color: #333333;
  }

  @media (max-width: 599px) {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    font-family: 'Urbanist', sans-serif;
    font-weight: bold;
    font-size: large;
    line-height: 1.5;
    color: #333333;
  }

  @media (max-width: 559px) {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    resize: none;
    width: 360px;
    font-family: 'Urbanist', sans-serif;
    font-weight: bold;
    font-size: small;
    line-height: 1.5;
    color: #333333;
  }
  
`;

export const Logo = styled.img`
  align: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;