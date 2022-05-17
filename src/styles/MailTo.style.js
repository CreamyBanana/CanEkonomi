import styled from 'styled-components'

export const ButtonMail = styled.div`
    textDecoration: 'none';
    color: #fff;
    margin-bottom: 20px;
    font-size: 18px;
    text-decoration: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }

    &:hover {
        color: #ff9c00;
        transition: 200ms ease-in;
        text-decoration: underline;
        transform: scale(1.05);
    }    
`