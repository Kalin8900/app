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
import Arrow from "../components/Arrow";
import arrowSrc from "../misc/images/down-arrow.png";

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

const ArrowWrapper = styled.div`
    position: absolute;
    bottom: 2.5vh;
    z-index: 2;
    width: 15vw;
    height: 8vh;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const AbsoluteArrow = styled.img`
  height: 80%;
  width: auto;
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
                <ArrowWrapper>
                    <span>Scroll down or use arrows!</span>
                    <AbsoluteArrow src={arrowSrc} className={"heroArrow"} />
                </ArrowWrapper>
            </HeroPageWrapper>
        </ThemeProvider>
    )
}

export {HeroPage};

