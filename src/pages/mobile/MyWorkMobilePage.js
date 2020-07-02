import React, {useRef, useEffect, useState} from "react";
import styled from "styled-components";
import PageWrapper from "../../components/PageWrapper";
import blueTriangle from "../../misc/images/tr_3.png";
import StyledTriangle from "../../components/Triangles";
import Project from "../../components/Project";
import {ReactComponent as Arrow} from "../../misc/images/arrow.svg";
import {gsap} from "gsap";


const MyWorkMobileWrapper = styled(PageWrapper)`
    display: flex;
    flex-flow: column;
`;

const MobileTr = styled(StyledTriangle)`
    height: 50%;
    top: 50%;
`;

const CentringDiv = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  height: 100vh;
`;

const TextWrapper = styled.div`
    margin-top: 5vh;
    font-size: ${props => props.theme.fontSize.xlarge}vh;
    font-weight: bold;
    justify-self: center;
    align-self: center;
    text-align: center;
    margin-bottom: 5vh;
`;

const ProjectsWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 85vh;
    display: flex;
    flex-flow: column;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 1vh;
`;

const ArrowLeft = styled(Arrow)`
    transform: rotateY(180deg);
`;

const ArrowWrapper = styled.div`
    margin-bottom: 10vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 3;
`;

const MyWorkMobilePage = (props) => {
    const ref = useRef(null)

    const [renderCnt, setRenderCnt] = useState(0);

    /**prepared for zooming projects**/
    const [projectsArr, setProjectsArr] = useState([]);

    const [currentProject, setCurrentProject] = useState(null);

    useEffect(() => {
        if (renderCnt === 0) {
            const ProjectsWrapper = ref.current.children;
            const tempArr = [];
            let i;
            for (i = 0; i < ProjectsWrapper.length - 1; ++i)
                tempArr.push(ProjectsWrapper[i]);
            setProjectsArr(tempArr);
            setRenderCnt(1);
        }
    }, [renderCnt, ref])

    useEffect(() => {
        if (renderCnt !== 0) {
            setCurrentProject(0);
            for (let i = 1; i < projectsArr.length; ++i)
                gsap.set(projectsArr[i], {autoAlpha: 0, zIndex: 0});
        }
    }, [projectsArr, renderCnt])

    const LoadRight = (e) => {
        const arrow = e.target;
        const color = e.target.style.fill;
        if (currentProject !== projectsArr.length - 1) {
            arrow.style.fill = "#49b46d";
            const curProject = projectsArr[currentProject];
            const nextProject = projectsArr[currentProject + 1];
            const tl = gsap.timeline({defaults: {ease: "power2"}});
            tl.to(curProject, {x: "-=10%", autoAlpha: 0, duration: 1.2, zIndex: 1});
            tl.fromTo(nextProject, {translateX: "+=10%", y: 0, zIndex: 2}, {
                translateX: 0,
                y: 0,
                autoAlpha: 1,
                duration: 1.2
            });
            setCurrentProject(prevState => prevState + 1);
        } else
            arrow.style.fill = "#d91e1e";
        setTimeout(() => arrow.style.fill = color, 1000);
    }
    const LoadLeft = (e) => {
        const arrow = e.target;
        const color = e.target.style.fill;
        if (currentProject !== 0) {
            arrow.style.fill = "#49b46d";
            const curProject = projectsArr[currentProject];
            const nextProject = projectsArr[currentProject - 1];
            const tl = gsap.timeline({defaults: {ease: "power2"}});

            tl.to(curProject, {x: "+=10%", autoAlpha: 0, duration: 1.2, zIndex: 1});
            tl.fromTo(nextProject, {x: "-=10%", y: 0, zIndex: 2}, {x: 0, y: 0, autoAlpha: 1, duration: 1.2});
            setCurrentProject(prevState => prevState - 1);
        } else
            arrow.style.fill = "#d91e1e";
        setTimeout(() => arrow.style.fill = color, 1000);
    }

    return (
        <MyWorkMobileWrapper id={props.id}>
            <CentringDiv>
                <MobileTr as="img" src={blueTriangle} alt="blue"/>
                <TextWrapper>Here you can find my projects</TextWrapper>
                <ProjectsWrapper ref={ref}>
                    <Project mobile={true} header={"My first React site"} text={ReactProjectText}
                             href={"https://github.com/Kalin8900/app/tree/master"}/>
                    <Project mobile={true} header={"EAN-8 generator"} text={EANProjectText}
                             href={"https://github.com/Kalin8900/Studies/tree/master/zad_9"}/>
                    <Project mobile={true} header={"Animations in FLTK!"} text={AnimProjectText}
                             href={"https://github.com/Kalin8900/Studies/tree/master/zad_6"}/>
                    <Project mobile={true} header={"Median filter on BMP"} text={MedianProjectText}
                             href={"https://github.com/Kalin8900/Studies/tree/master/zad_8"}/>
                    <Project mobile={true} header={"Menus in Graph_lib"} text={MenuProjectText}
                             href={"https://github.com/Kalin8900/Studies/tree/master/zad_7"}/>
                    <ArrowWrapper>
                        <ArrowLeft width={"50%"} height={"50%"} onClick={LoadLeft}/>
                        <Arrow width={"50%"} height={"50%"} onClick={LoadRight}/>
                    </ArrowWrapper>
                </ProjectsWrapper>
            </CentringDiv>
        </MyWorkMobileWrapper>
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

export default MyWorkMobilePage;