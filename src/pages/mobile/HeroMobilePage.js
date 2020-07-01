import React, {useEffect, useRef, useState} from "react";
import styled, {ThemeProvider} from "styled-components";
import StyledTriangle from "../../components/Triangles";
import rootTheme from "../../themes/root";
import PageWrapper from "../../components/PageWrapper";
import greyTriangle from "../../misc/images/tr_2.png";
import TextRectangle from "../../components/TextRectangle";
import arrowSrc from "../../misc/images/down-arrow.png";
import Button from "../../components/Button";
import HamburgerMenu from "../../components/Hamburger";
import MenuPage from "../../components/MenuPage";
import {gsap} from "gsap";

const HeroMobilePageWrapper = styled(PageWrapper)`
    flex-flow: column;
    justify-content: center;
    align-items: center;
`;

const MobileTriangle = styled(StyledTriangle)`
    height: 50%;
    top: +50%;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    font-size: ${props => props.theme.fontSize.xxlarge}vh;
    height: 90%;
    width: 92vw;
    z-index: 2;
    margin: 0 4vw;
`;

const StyledText = styled.h1`
    z-index: 1;
    font-size: ${props => props.theme.fontSize.xxlarge}vh;
    font-weight: bold;
    margin: 0;
`;

const HeroButton = styled(Button)`
    margin-top: 1vh;
    width: 65%;
    height: 10vh;
    align-self: flex-end;
    font-weight: bold;
    font-size: ${props => props.theme.fontSize.medium}vh;
    color: ${props => props.theme.colors.textColor};
    z-index: 5;
`;

const ArrowWrapper = styled.div`
    position: absolute;
    bottom: 2.5vh;
    width: 50vw;
    left: 25vw;
    z-index: 3;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const AbsoluteArrow = styled.img`
    height: 5vh;
    width: auto;
`;

const HeroMobilePage = (props) => {
    const menuPage = useRef(null);
    const hamburger = useRef(null);
    const heroBtn = useRef(null);
    const arrowWrapper = useRef(null);
    const [isMenuOpen, setMenu] = useState(false);
    const [arrowTimeline, setArrowTimeline] = useState(gsap.timeline({defaults: {repeat: -1, duration: .7, yoyo: true}}));

    useEffect(() => {
        arrowTimeline.fromTo(arrowWrapper.current.children[1],{y: 0, width: "9vw"},  {y: "+=10", width: 6.5 + "vw"});
    });

    const menuAction = () => {
        const tl = gsap.timeline({defaults: {ease: 'power2'}})
        const [page] = menuPage.current.children;
        const [menu] = hamburger.current.children;
        if(!isMenuOpen)
        {
            gsap.set(page.children, {autoAlpha: 0});
            arrowTimeline.pause(0);
            tl.to(page, {x: "+=100vw", autoAlpha: 1, duration: 1});
            tl.to(page.children, {autoAlpha: 1, duration: 1.5});
            tl.to(menu.children[1], {scaleX: 0, duration: 0.5}, "-=1.75");
            tl.to(menu.children[0], {duration: .4, y: "+=1.75vh"}, "-=1");
            tl.to(menu.children[2], {duration: .4, y: "-=1.75vh"}, "-=1");
            tl.to(menu.children[2], {rotation: -45, duration: .4}, "-=.5");
            tl.to(menu.children[0], {rotation: 45, duration: .4}, "-=.5");
            tl.to(menu.children, {backgroundColor: "#242526", duration: 1}, "-=2");
        }
        else
        {
            tl.to([menu.children[0], menu.children[2]], {rotation: 0, duration: .4});
            tl.to(menu.children[1], {scaleX: 1}, "-=4");
            tl.to([menu.children[0], menu.children[2]], {y: 0, duration: .4});
            tl.to(page.children, {autoAlpha: 0, duration: .4});
            tl.to(menuPage.current.children, {x: 0, duration: 1.5});
            tl.to(menu.children, {backgroundColor: "#dadce1", duration: 1}, "-=1.6");
            arrowTimeline.play(0);
        }
        setMenu(prevState => !prevState);
    }

    return (
        <ThemeProvider theme={rootTheme}>
            <HeroMobilePageWrapper id={props.id}>
                <div ref={hamburger} onClick={menuAction}>
                    <HamburgerMenu />
                </div>
                <div ref={menuPage}>
                    <MenuPage />
                </div>
                <MobileTriangle as={"img"} src={greyTriangle}/>
                <TextWrapper id={props.textWrapperId}>
                    <TextRectangle primary>Welcome,</TextRectangle>
                    <StyledText>my name is Michał</StyledText>
                    <HeroButton ref={heroBtn} primary onClick={menuAction} as="a" id={props.heroBtnId}>
                        You should know me better
                    </HeroButton>
                </TextWrapper>
                <ArrowWrapper ref={arrowWrapper}>
                    <span>Swipe down!</span>
                    <AbsoluteArrow onClick={() => props.api.moveSectionDown()} src={arrowSrc} className={"heroArrow"}/>
                </ArrowWrapper>
            </HeroMobilePageWrapper>
        </ThemeProvider>
    )
}

export default HeroMobilePage;