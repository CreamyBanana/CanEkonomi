import styled from 'styled-components'

export const FooterContainer = styled.div`
    padding: 80px 60px;
    background: #808080; 
    position:absolute;
    left:0;
    bottom:0;
    right:0;
    border-top: 1px solid grey;
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
    margin-left: 60px;
`

export const FooterRow = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-gap: 20px;

    @media (max-width: 1000px){
        grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    }
`

export const FooterLink = styled.div`
    color: #fff;
    margin-bottom: 20px;
    font-size: 18px;
    text-decoration: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    &:hover {
        color: #ff9c00;
        transition: 200ms ease-in;
        text-decoration: underline;
        transform: scale(1.05);
    }
    @media (max-width: 860px) {
        display: none;
      }
    
`

export const FooterTitle = styled.div`
    font-size: 24px;
    color: #fff;
    margin-bottom: 40px;
    font-weight: bold;
`