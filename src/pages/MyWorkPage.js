import React from "react";
import styled, {ThemeProvider} from "styled-components";
import PageWrapper from "../components/PageWrapper";
import blueTriangle from "../misc/images/tr_3.png";
import StyledTriangle from "../components/Triangles";
import rootTheme from "../themes/root";
import Project from "../components/Project";
import Arrow from "../components/Arrow";
import arrowSrc from "../misc/images/nextWhite.svg";
import PWLogo from "../misc/images/PW.png";

const MyWorkPageWrapper = styled(PageWrapper)`
    display: flex;
    flex-flow: column;
    z-index: -2;
`;

const TextWrapper = styled.div`
    margin-top: 5vh;
    font-size: ${props => props.theme.fontSize.xlarge}vw;
    font-weight: bold;
    justify-self: center;
    align-self: center;
    margin-bottom: 5vh;
`;

const ProjectsWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
`;

const ArrowRight = styled(Arrow)`
    width: 10vw;
    height: 10vh;
    z-index: 1;
`;

const ArrowLeft = styled(ArrowRight)`
    transform: rotate(180deg);
`;

const FirstProject = styled(Project)`

`;

const MyWorkPage = (props) => {
    return (
        <ThemeProvider theme={rootTheme}>
            <MyWorkPageWrapper id={props.id}>
                <StyledTriangle as="img" src={blueTriangle} alt="blue" />
                <TextWrapper>Here you can find my projects</TextWrapper>
                <ProjectsWrapper>
                    <ArrowLeft as="img" src={arrowSrc} alt="arrow" />
                    <FirstProject ProjectType={"Study C++"} text={FirstProjectText} technologies={props.ProjectType} href={"https://github.com/Kalin8900/Studies/tree/master/zad_7"} logo={PWLogo}/>
                    <ArrowRight as="img" src={arrowSrc} alt="arrow" />
                </ProjectsWrapper>
            </MyWorkPageWrapper>
        </ThemeProvider>
    )
}

const FirstProjectText = "This project was about refactoring code from C to C++. I received a short C program which was just creating and saving the bitmap. The main goal was to create a bitmap with generated EAN-8 Code and save it to file. " +
    "I've done this by creating a class witch handle the bitmap creating and saving. The class has also a method which can generate a EAN-8 Code with (almost) any size of the image. The implementation of the class is very surprising. I really recommend to take a look on it.";

export {MyWorkPage};