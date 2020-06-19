import React from "react";
import styled from "styled-components";


const TextRectangle = styled.div`
    position: relative;
    font-weight: bold;
    z-index: 5;
  
    &::before {
    content: "";
    background-color: ${props => props.primary ? props.theme.colors.blueAccent : props.theme.colors.accentBackground};
    position: absolute;
    left: -10vh;
    height: 100%;
    width: 35%;
    z-index: -1;
    }
`;

export default TextRectangle;