import styled from "styled-components";

export const ViewContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const LogoTextContainer = styled.div`
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
  height: auto;
  width: 765px;
  line-height: 1.5;
  color: #333333;
  margin-top: 10px;
  margin-bottom: 15px;
  
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
    margin-top: 10px;
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
    margin-top: 10px;
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
    margin-top: 10px;
  }
  
`;

export const TextContainerGdpr = styled.div`
  text-align: justify;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Urbanist', sans-serif;
  font-weight: bold;
  font-size: x-large;
  resize: none;
  height: auto;
  width: 950px;
  line-height: 1.5;
  color: #333333;
  margin-top: 20px;
  margin-bottom: 15px;
  
  @media (max-width: 1000px) {
    text-align: justify;
    margin-left: auto;
    margin-right: auto;
    font-family: 'Urbanist', sans-serif;
    font-weight: bold;
    font-size: large;
    resize: none;
    width: 600px;
    line-height: 1.5;
    color: #333333;
    margin-bottom: 15px;
  }

  @media (max-width: 660px) {
    text-align: justify;
    margin-left: auto;
    margin-right: auto;
    font-family: 'Urbanist', sans-serif;
    font-weight: bold;
    font-size: large;
    line-height: 1.5;
    color: #333333;
    width: 480px;
  }

  @media (max-width: 559px) {
    text-align: justify;
    margin-left: auto;
    margin-right: auto;
    resize: none;
    width: 360px;
    font-family: 'Urbanist', sans-serif;
    font-weight: bold;
    font-size: small;
    line-height: 1.5;
    color: #333333;
    margin-top: 10px;
    padding: 10px;
  }
  
`;

export const TextContainerServices = styled.div`
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
  margin-top: 40px;
  margin-bottom: 20px;
  
  @media (max-width: 861px) {
    text-align: center;
    width: 100%;
    font-family: 'Urbanist', sans-serif;
    font-weight: bold;
    font-size: large;
    resize: none;
    width: 600px;
    line-height: 1.5;
    color: #333333;
    margin-top: 40px;
    margin-bottom: -30px;
    padding: 4px;
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
    padding: 4px;
    width: 100%;
    resize: none;
    width: 360px;
    font-family: 'Urbanist', sans-serif;
    font-weight: bold;
    font-size: small;
    line-height: 1.5;
    color: #333333;
    margin-top: 20px;
    margin-bottom: -75px;
  }
  
`;

export const TextContainerHeader = styled.div`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
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
    width: 60%;
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
    width: 60%;
    font-family: 'Urbanist', sans-serif;
    font-weight: bold;
    font-size: x-large;
    color: #333333;
  }

  @media (max-width: 559px) {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    width: 60%;
    resize: none;
    font-family: 'Urbanist', sans-serif;
    font-weight: bold;
    font-size: large;
    color: #333333;
  }
  
`;

export const Logo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;