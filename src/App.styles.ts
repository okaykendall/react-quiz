
import styled, { createGlobalStyle } from 'styled-components';
//@ts-ignore
import BGImage from './imgs/magritte-pic.jpeg'

export const GlobalStyle = createGlobalStyle`
html {
    height: 100%;
}
body {
    background-image: url(${BGImage});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center; 
}

* {
    box-sizing: borer-box;
    font-family: 'Sawarabi Mincho', sans-serif;
}

button {
    background-color: black;
}
`;

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;

> p {
    color: #FA9871;
}
.score {
    color: #FA9871;
    text-shadow: 0px 2px 2px cornsilk;
    font-size: 2rem;
    margin: 0;
    padding-bottom: 10px;
}

h1 {
    // background-image: linear-gradient(180deg, cornsilk, #87f1ff);
    // background-size: 100%;
    // background-clip: text;
    // --webkit-background-clip: text;
    // --webkit-text-fill-color: transparent;
    // --moz-background-clip: text;
    // --moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #FA9871);
    font-size: 70px;
    text-align: center;
    margin: 20px;
    color: cornsilk;

}

.start, .next {
    cursor: pointer;
    background-image: linear-gradient(180deg, cornsilk, #FA9871);
    border: 2px solid black;
    box-shadow: 0px 5px 10px cornsilk;
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
    color: black;
    font-size: 20px;
}

.start:hover, .next:hover {
    transform: scale(1.2);
}

.start {
    max-width: 200px;
}
`