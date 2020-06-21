import React, {useRef, useEffect} from 'react';
import {HeroPage} from "./pages/HeroPage"
import {AboutMePage} from "./pages/AboutMePage";
import {HireMePage} from "./pages/HireMePage";
import {MyWorkPage} from "./pages/MyWorkPage";
import {gsap} from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import ReactFullpage from "@fullpage/react-fullpage";


const animation = (pageIndex, elementsArr) => {
    if(pageIndex === 0)
    {
        if(elementsArr.length === 3)
        {
            gsap.set(elementsArr, {autoAlpha: 0});
            const tl = gsap.timeline({defaults: {ease: 'power2'}});
            tl.to(elementsArr[0],{autoAlpha: 1, duration: 1}, 0.5);
            tl.fromTo(elementsArr[1],{x: '+=200'}, {x: 0, autoAlpha: 1, duration: 1}, '-=0.5');
            tl.fromTo(elementsArr[2],{y: '-=50'}, {y: 0, autoAlpha: 1, duration: 1});
        }
        else
            console.log("To animate first page 3 elements are required. heroImg, heroText and heroBtn, exactly in that order");
    }
    else if(pageIndex === 1)
    {

    }
}

const Fullpage = React.forwardRef((props, ref) => (
    <ReactFullpage
        //fullpage options
        licenseKey = {'Q85^XEW#h3'}
        scrollingSpeed = {1000}
        navigation = {true}
        afterLoad = {(origin) => {
            const [cell] = origin.item.children;
            const [page] = cell.children;
            animation(origin.index, [page.children[0], page.children[2], page.children[2].children[2]]);
        }}

        render={({ state, fullpageApi }) => {
            return (
                <ReactFullpage.Wrapper ref={ref}>
                    <div className="section">
                        <HeroPage api={fullpageApi} id={"hero"} imgId={"heroImg"} textWrapperId={"heroText"} heroBtnId={"heroBtn"} link={"#aboutMe"}/>
                    </div>
                    <div className="section">
                        <AboutMePage api={fullpageApi} id={"aboutMe"}/>
                    </div>
                    <div className="section">
                        <MyWorkPage className={"section"} id={"myWork"}/>
                    </div>
                </ReactFullpage.Wrapper>
            );
        }}
    />
))

const FullPageWithRef = React.forwardRef((props, ref) => (
    <Fullpage ref={ref} />
));

function App() {
    const ref = useRef(null);
    useEffect(() => {
        const deref = ref.current.children;
        const fullPageWrapper = deref[0];
        const fullPageSections = fullPageWrapper.children;
        const [cell] = fullPageSections[0].children;
        const [heroPage] = cell.children;

        const heroImg = heroPage.children[0];
        const heroText = heroPage.children[2];
        const heroBtn = heroText.children[2];

        gsap.fromTo(heroImg, {y: '+=500'}, {y: 0, duration: 1});
        animation(0, [heroImg, heroText, heroBtn]);
    })

    return (
        <div ref={ref}>
            <Fullpage/>
        </div>

    );
};

export {App, Fullpage};

//Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
//<div>Icons made by <a href="https://www.flaticon.com/authors/roundicons" title="Roundicons">Roundicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>