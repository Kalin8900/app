import React from "react";
import styled, {ThemeProvider} from "styled-components";
import greyTriangle from "../misc/images/tr_2.png";
import heroImg from "../misc/images/hero2.png"
import PageWrapper from "../components/PageWrapper";
import StyledTriangle from "../components/Triangles.js";
import HeroImg from "../components/HeroImage";
import Button from "../components/Button";
import TextRectangle from "../components/TextRectangle";
import rootTheme from "../themes/root";

const HeroPageWrapper = styled(PageWrapper)`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  font-size: ${props => props.theme.fontSize.xxlarge}vw;
  z-index: 10;
`;

const StyledText = styled.h1`
  z-index: 1;
  font-size: ${props => props.theme.fontSize.xxlarge}vw;
  font-weight: bold;
  margin: 0;
`;

const HeroButton = styled(Button)`
margin-top: 1vh;
width: 45%;
height: 10vh;
align-self: flex-end;
font-weight: bold;
font-size: ${props => props.theme.fontSize.buttonFontSize}vw;
color: ${props => props.theme.colors.textColor};
z-index: 100;
`;

const HeroPage = (props) => {
    return (
        <ThemeProvider theme={rootTheme}>
            <HeroPageWrapper id={props.id} className="hero">
                <HeroImg as="img" src={heroImg} alt="hero" id={props.imgId}/>
                <StyledTriangle as="img" src={greyTriangle} alt="grey"/>
                <TextWrapper id={props.textWrapperId}>
                    <TextRectangle primary>Welcome,</TextRectangle>
                    <StyledText>my name is Michał</StyledText>
                    <HeroButton primary onClick={() => props.api.moveSectionDown()} as="a" id={props.heroBtnId}>
                        You should know me better
                    </HeroButton>
                </TextWrapper>
            </HeroPageWrapper>
        </ThemeProvider>
    )
}

export {HeroPage};

