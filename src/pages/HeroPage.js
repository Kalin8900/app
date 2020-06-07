import React from "react";
import styled from "styled-components";
import greyTriangle from "../misc/images/tr_2.png";
import heroImg from "../misc/images/hero2.png"
import {PageWrapper} from "../components/PageWrapper";
import {StyledTriangle} from "../components/Triangles.js";
import {HeroImg} from "../components/HeroImage";
import {Button} from "../components/Button";

const HeroPageWrapper = styled(PageWrapper)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: -2;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
`;

const StyledText = styled.h1`
  font-size: 4.5vw;
  font-weight: bold;
  margin: 0;
`

const HeroButton = styled(Button)`
margin-top: 1vh;
width: 45%;
height: 10vh;
align-self: flex-end;
font-weight: bold;
font-size: 1.25vw;
`;

function HeroPage() {
    return(
        <HeroPageWrapper>
            <HeroImg as="img" src={heroImg} alt="hero" />
            <StyledTriangle as="img" src={greyTriangle} alt="blue" />
            <TextWrapper>
                <StyledText>Welcome,</StyledText>
                <StyledText>my name is Michał</StyledText>
                <HeroButton>You should know me better</HeroButton>
            </TextWrapper>
        </HeroPageWrapper>
    )
}

export {HeroPage};

