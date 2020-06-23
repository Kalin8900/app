import React, {useRef, useEffect, useState} from "react";
import styled, {ThemeProvider} from "styled-components";
import PageWrapper from "../components/PageWrapper";
import blueTriangle from "../misc/images/tr_3.png";
import StyledTriangle from "../components/Triangles";
import rootTheme from "../themes/root";
import Project from "../components/Project";
import {ReactComponent as Arrow} from "../misc/images/arrow.svg";
import laptopC from "../misc/images/lap 1.svg";
import laptopReact from "../misc/images/laptopReact.svg";
import {ReactComponent as Laptop} from "../misc/images/lap 1.svg";
import {gsap} from 'gsap';
import userEvent from "@testing-library/user-event";

const MyWorkPageWrapper = styled(PageWrapper)`
    display: flex;
    flex-flow: column;
`;

const CentringDiv = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  height: 70vh;
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
    position: relative;
    width: 100%;
    height: 85vh;
    display: flex;
    flex-flow: column;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`;

const ArrowRight = styled(Arrow)`
    width: 10vw;
    height: 10vh;
    z-index: 1;
    
    &:hover {
    cursor: pointer;
    fill: red;
    }
`;

const ArrowLeft = styled(ArrowRight)`
    transform: rotate(180deg);
`;

const FirstProject = styled(Project)`
`;

const SecondProject = styled(Project)`
`;

const ThirdProject = styled(Project)`
`;

const StyledLaptop = styled(Laptop)`
  z-index: 1;
`

const Wrapper = styled.div`
position: relative;
width: 50%;
height: 100%;
`


const MyWorkPage = (props) => {
    const ref = useRef(null)

    const [renderCnt, setRenderCnt] = useState(0);

    const [projectsArr, setProjectsArr] = useState([]);

    const [currentProject, setCurrentProject] = useState(null);

    useEffect(() => {
        if(renderCnt === 0)
        {
            const ProjectsWrapper = ref.current.children;
            const tempArr = [];
            let i;
            for(i = 0; i < ProjectsWrapper.length; ++i)
                tempArr.push(ProjectsWrapper[i].children[0]);
            setProjectsArr(tempArr);
            setRenderCnt(1);
        }
    }, [renderCnt, ref])

    return (
        <ThemeProvider theme={rootTheme}>
            <MyWorkPageWrapper id={props.id}>
                <CentringDiv>
                    <StyledTriangle as="img" src={blueTriangle} alt="blue"/>
                    <TextWrapper>Here you can find my projects</TextWrapper>
                    <ProjectsWrapper ref={ref}>
                            <SecondProject src={laptopC} header={"Animations in FLTK!"} text={FirstProjectText}
                                           href={"https://github.com/Kalin8900/Studies/tree/master/zad_6"}/>
                            <FirstProject  src={laptopC} header={"EAN-8 generator"} text={FirstProjectText}
                                           href={"https://github.com/Kalin8900/Studies/tree/master/zad_7"}/>
                            <ThirdProject src={laptopReact} header={"My first React site"} text={FirstProjectText}
                                          href={"https://github.com/Kalin8900/Studies/tree/master/zad_6"}/>
                    </ProjectsWrapper>
                </CentringDiv>
            </MyWorkPageWrapper>
        </ThemeProvider>
    )
}

const FirstProjectText = "This project was about refactoring code from C to C++. I received a short C program which was just creating and saving the bitmap. The main goal was to create a bitmap with generated EAN-8 Code and save it to file. " +
    "I've done this by creating a class witch handle the bitmap creating and saving. The class has also a method which can generate a EAN-8 Code with (almost) any size of the image. The implementation of the class is very surprising. I really recommend to take a look on it.";

export {MyWorkPage};