import React, {useRef, useEffect, useState} from "react";
import styled, {ThemeProvider} from "styled-components";
import PageWrapper from "../components/PageWrapper";
import blueTriangle from "../misc/images/tr_3.png";
import StyledTriangle from "../components/Triangles";
import rootTheme from "../themes/root";
import Project from "../components/Project";

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

    /**prepared for zooming projects**/
    const [projectsArr, setProjectsArr] = useState([]);

    //const [currentProject, setCurrentProject] = useState(null);

    useEffect(() => {
        if(renderCnt === 0) {
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
                        <Project header={"My first React site"} text={ReactProjectText}
                                 href={"https://github.com/Kalin8900/reactPort"}/>
                        <Project header={"EAN-8 generator"} text={EANProjectText}
                                 href={"https://github.com/Kalin8900/Studies/tree/master/zad_9"}/>
                        <Project header={"Animations in FLTK!"} text={AnimProjectText}
                                 href={"https://github.com/Kalin8900/Studies/tree/master/zad_6"}/>
                        <Project header={"Median filter on BMP"} text={MedianProjectText}
                                 href={"https://github.com/Kalin8900/Studies/tree/master/zad_8"}/>
                        <Project header={"Menus in Graph_lib"} text={MenuProjectText}
                                 href={"https://github.com/Kalin8900/Studies/tree/master/zad_7"}/>
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

const MedianProjectText = "The main purpose of this task was to write a program that reads the BMP file, puts a median filter on it, and writes to the second BMP file. " +
    "n addition, I had to transfer the code from the received program written in C to C++. This code read and wrote BMP files. " +
    "This task showed the difference in binary file operations between C and C++. Stream operations in C++ proved to be crucial!";

const MenuProjectText = "Programs that have an extensive user interface have always fascinated me. " +
    "Using the Graph_lib library, I wrote a rather interesting menu that when opened moves other elements without doing overflow. " +
    "Thanks to this task I entered the world of creating such interfaces and you can see the results of my work by clicking the link below.";

export {MyWorkPage};