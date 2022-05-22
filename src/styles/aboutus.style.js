import styled from "styled-components";

export const ViewContainerAbout = styled.div`
  width: 100%;
  display: flex;
`;

export const LogoTextContainerAbout = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;

export const TextContainerAbout = styled.div`
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


  
  @media (max-width: 861px) {
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

export const TextContainerAboutHeader = styled.div`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
  font-family: 'Urbanist', sans-serif;
  font-weight: bold;
  font-size: xx-large;
  resize: none;
  line-height: 1.5;
  color: #333333;
  margin-top: 10px;
  text-shadow: 2px 3px 5px rgba(0,0,0,0.5);

  
  @media (max-width: 861px) {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    font-family: 'Urbanist', sans-serif;
    font-weight: bold;
    font-size: x-large;
    resize: none;
    color: #333333;
  }

  @media (max-width: 599px) {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    font-family: 'Urbanist', sans-serif;
    font-weight: bold;
    font-size: x-large;
    color: #333333;
  }

  @media (max-width: 559px) {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    resize: none;
    font-family: 'Urbanist', sans-serif;
    font-weight: bold;
    font-size: large;
    color: #333333;
  }
  
`;

export const LogoAbout = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 1400px;
`;