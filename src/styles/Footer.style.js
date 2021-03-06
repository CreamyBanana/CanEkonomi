import styled from 'styled-components'

export const FooterContainer = styled.div`
    background: #F5F5F5; 
    left:0;
    bottom:0;
    right:0;
    border-top: 1px solid grey;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 0;
    padding-top: 2px;
`

export const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto; 
`

export const FooterColumn = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`


export const FooterLink = styled.div`
    color: black;
    margin-bottom: 10px;
    font-size: 18px;
    text-decoration: none;
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    &:hover {
        color: grey;
    text-decoration: underline;
    transform: scale(1.05);
    cursor: pointer;
    }
    
`

export const Logo = styled.img`
  max-width: 180px;
  height: auto;
  align: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  width: 50%;
`;