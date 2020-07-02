import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import StyledTriangle from "../../components/Triangles";
import PageWrapper from "../../components/PageWrapper";
import greyTriangle from "../../misc/images/tr_2.png";
import TextRectangle from "../../components/TextRectangle";
import arrowSrc from "../../misc/images/down-arrow.png";
import Button from "../../components/Button";
import {gsap} from "gsap";
import {ScrollToPlugin} from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

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
    const heroBtn = useRef(null);
    const arrowWrapper = useRef(null);
    const [arrowTimeline, setArrowTimeline] = useState(gsap.timeline({
        defaults: {
            repeat: -1,
            duration: .7,
            yoyo: true
        }
    }));

    useEffect(() => {
        arrowTimeline.fromTo(arrowWrapper.current.children[1], {y: 0, width: "9vw"}, {y: "+=10", width: 6.5 + "vw"});
    });

    return (
        <HeroMobilePageWrapper id={props.id}>
            <MobileTriangle as={"img"} src={greyTriangle}/>
            <TextWrapper id={props.textWrapperId}>
                <TextRectangle primary>Welcome,</TextRectangle>
                <StyledText>my name is Michał</StyledText>
                <HeroButton ref={heroBtn} primary
                            onClick={() => gsap.to(window, {scrollTo: {y: "#aboutMe"}, duration: 1})} as="a"
                            id={props.heroBtnId}>
                    You should know me better
                </HeroButton>
            </TextWrapper>
            <ArrowWrapper ref={arrowWrapper}>
                <span>Swipe down!</span>
                <AbsoluteArrow onClick={() => gsap.to(window, {scrollTo: {y: "#aboutMe"}, duration: 1})} src={arrowSrc}
                               className={"heroArrow"}/>
            </ArrowWrapper>
        </HeroMobilePageWrapper>
    )
}

export default HeroMobilePage;