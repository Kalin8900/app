import React from "react";
import styled from "styled-components";

const Button = styled.div`
padding: 0 2vw;
position: relative;
text-align: center;
z-index: 2;
display: flex;
justify-content: center;
align-items: center;

&:before, &:after {
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
}

&:before {
  border: solid 3px #343439;
  top: 0;
  left: 0;
  box-shadow: -1vh 1vh 1vh rgba(0, 0, 0, 0.2);
  z-index: -1;
}

&:after {
  background-color: #39397f;
  top: 1vh;
  right: 1vh;
  z-index: -2;
}
`;

export {Button};