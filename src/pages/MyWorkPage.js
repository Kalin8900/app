import React, {useRef, useEffect, useState} from "react";
import styled, {ThemeProvider} from "styled-components";
import PageWrapper from "../components/PageWrapper";
import blueTriangle from "../misc/images/tr_3.png";
import StyledTriangle from "../components/Triangles";
import rootTheme from "../themes/root";
import Project from "../components/Project";
import laptopC from "../misc/images/lap 1.svg";
import laptopReact from "../misc/images/laptopReact.svg";

const MyWorkPageWrapper = styled(PageWrapper)`
    display: flex;
    flex-flow: column;
`;

const CentringDiv = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  height: 100vh;
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
    margin-bottom: 1vh;
`;

const MyWorkPage = (props) => {
    const ref = useRef(null)

    const [renderCnt, setRenderCnt] = useState(0);

    const [projectsArr, setProjectsArr] = useState([]);

    const [currentProject, setCurrentProject] = useState(null);

    useEffect(() => {
        if (renderCnt === 0) {
            const ProjectsWrapper = ref.current.children;
            const tempArr = [];
            let i;
            for (i = 0; i < ProjectsWrapper.length; ++i)
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
                        <Project header={"My first React site"} text={ReactProjectText}
                                 href={"https://github.com/Kalin8900/reactPort"}/>
                        <Project header={"EAN-8 generator"} text={EANProjectText}
                                 href={"https://github.com/Kalin8900/Studies/tree/master/zad_9"}/>
                        <Project header={"Animations in FLTK!"} text={AnimProjectText}
                                 href={"https://github.com/Kalin8900/Studies/tree/master/zad_6"}/>
                    </ProjectsWrapper>
                </CentringDiv>
            </MyWorkPageWrapper>
        </ThemeProvider>
    )
}

const EANProjectText = "This project was about refactoring code from C to C++. I received a short C program which was just creating and saving the bitmap. " +
    "The main goal was to create a bitmap with generated EAN-8 Code and save it to file. " +
    "I've done this by creating a class witch handle the bitmap creating and saving. The class has also a method which can generate a EAN-8 Code with (almost) any size of the image. " +
    "The implementation of the class is very surprising. I really recommend to take a look on it.";

const ReactProjectText = "During the second semester of study, I had the pleasure to participate in a subject that aimed to familiarize me with Internet technologies. " +
    "The scope of the subject ended with VanillaJS and PHP, so I decided that I would take myself and start moving the page made during classes to React.js. " +
    "The entire page has been written only on the basis of React and GSAP documentation. If you are curious how it looked like earlier, please visit the repository!";

const AnimProjectText = "After a moment of fun with the basic controls, Graph_lib and FLTK documentation, it was time to create the first animations using these libraries. " +
    "While writing this program, my tiny figure API was also used, which was modified over several tasks. " +
    "The task required a lot of thinking over mathematical transformations, but it gave me a lot of fun and taught me a lot.";

export {MyWorkPage};