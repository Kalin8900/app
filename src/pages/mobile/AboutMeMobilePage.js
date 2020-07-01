import React from "react";
import styled, {ThemeProvider} from "styled-components";
import RotatedTriangleImg from "../../components/RotatedTriangle";
import PageWrapper from "../../components/PageWrapper";
import rootTheme from "../../themes/root";
import blueTriangle from "../../misc/images/tr_3.png";
import TextRectangle from "../../components/TextRectangle";
import Button from "../../components/Button";

const AboutMobileWrapper = styled(PageWrapper)`
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    align-items: center;
`;

const MobileRotatedTr = styled(RotatedTriangleImg)`
    height: 50%;
`;

const AboutMeWrapper = styled.div`
  font-size: ${props => props.theme.fontSize.xlarge}vh;
  margin: 0;
  z-index: 2;
  width: 80%;
`;

const TextAboutMe = styled.div`
  font-size: ${props => props.theme.fontSize.mediumSmall}vh;
  margin-right: 4vw;
`;

const SkillsWrapper = styled.div`
  font-size: ${props => props.theme.fontSize.xlarge}vh;
  z-index: 2;
  width: 80%;
  //margin: 0 5vw 0 0;
`;

const StyledList = styled.ul`
  font-size: ${props => props.theme.fontSize.mediumSmall}vh;
`

const ButtonWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  font-size: ${props => props.theme.fontSize.xlarge}vh;
  //margin-left: 2vw;
  width: 80%;
  z-index: 2;
`;

const HireButton = styled(Button)`
  margin: 1vh 5vw 0 0;
  width: 70%;
  height: 10vh;
  align-self: flex-end;
  font-weight: bold;
  font-size: ${props => props.theme.fontSize.medium}vh;
`;

const AboutMeMobilePage = (props) => {

    return(
        <ThemeProvider theme={rootTheme}>
            <AboutMobileWrapper>
                <MobileRotatedTr src={blueTriangle} />
                <AboutMeWrapper>
                    <TextRectangle secondary>Something about me</TextRectangle>
                    <TextAboutMe>
                        I am undergraduate student of geoinformatics at Warsaw University of Technology but due to my desire to increase the knowledge I spent plenty of my leisure to explore and learn C++. I started taking a real interest in programming in middle school. I began in Front-End due to the greater affordability and quantity of materials available. Thanks to this I became involved in programming and I continue my studies in this field.
                        <p>I really like facing new problems and I will not rest until I solve them. I am great at teamwork and consistently fulfill my duties. I learn very quickly and enjoy deepening my knowledge.</p>
                    </TextAboutMe>
                </AboutMeWrapper>
                <SkillsWrapper>
                    <TextRectangle secondary>My skills</TextRectangle>
                    <StyledList>
                        <li><b>C++</b></li>
                        <li>Knowledge of <b>Qt and QML</b></li>
                        <li>I write tested and clean code</li>
                        <li>Knowledge of <b>React, JS, HTML, CSS</b></li>
                        <li>First steps with databases and <b>SQL</b></li>
                        <li>Exquisitely good ability to organize time and adapt to new
                            conditions
                        </li>
                        <li>Very good command of English both spoken and written</li>
                        <li>My own development is one of the
                            most important things for me
                        </li>
                    </StyledList>
                </SkillsWrapper>
                <ButtonWrapper>
                    <TextRectangle primary>Are you interested?</TextRectangle>
                    <HireButton primary onClick={() => props.api.moveSectionDown()}>Take a look what I've done so far!</HireButton>
                </ButtonWrapper>
            </AboutMobileWrapper>
        </ThemeProvider>

    )
}

export default AboutMeMobilePage;