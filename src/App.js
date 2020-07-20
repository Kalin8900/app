import React, {useRef, useEffect} from 'react';
import {HeroPage} from "./pages/HeroPage"
import {AboutMePage} from "./pages/AboutMePage";
import {MyWorkPage} from "./pages/MyWorkPage";
import {gsap} from 'gsap';
import ReactFullpage from "@fullpage/react-fullpage";

const animation = (pageIndex, pageChildrens) => {
    const tl = gsap.timeline({defaults: {ease: 'power2'}});

    if(pageIndex === 0) {
        gsap.set([pageChildrens[0], pageChildrens[2], pageChildrens[2].children[2], pageChildrens[3],
            pageChildrens[4]], {autoAlpha: 0});
        tl.to(pageChildrens[0], {autoAlpha: 1, duration: 1}, 0.5);
        tl.fromTo(pageChildrens[2], {x: '+=200'}, {x: 0, autoAlpha: 1, duration: 1}, '-=0.5');
        tl.fromTo(pageChildrens[2].children[2], {y: '-=50'}, {y: 0, autoAlpha: 1, duration: .7});
        tl.fromTo(pageChildrens[3], {y: '+=50'}, {y: 0, autoAlpha: 1, duration: .5})
    } else if(pageIndex === 1) {
        gsap.set([pageChildrens[1], pageChildrens[2], pageChildrens[3], pageChildrens[3].children[1]], {autoAlpha: 0});
        tl.fromTo(pageChildrens[1], {x: '+=200'}, {x: 0, autoAlpha: 1, duration: 1});
        tl.fromTo(pageChildrens[2], {x: '+=200'}, {x: 0, autoAlpha: 1, duration: 1}, "-=0.2");
        tl.fromTo(pageChildrens[3], {x: '-=200'}, {x: 0, autoAlpha: 1, duration: 1}, "+=0.2");
        tl.fromTo(pageChildrens[3].children[1], {y: '-=35'}, {y: 0, autoAlpha: 1, duration: 1});
    } else if(pageIndex === 2) {
        const pageWrapper = pageChildrens[0];
        const [workImg, workHeader, workProjectsWrapper] = pageWrapper.children;
        gsap.set([workHeader, workProjectsWrapper], {autoAlpha: 0});
        tl.fromTo(workHeader, {y: "-=300"}, {y: 0, autoAlpha: 1, duration: 1});
        tl.fromTo(workProjectsWrapper, {y: "+=1000", zIndex: 5}, {y: 0, autoAlpha: 1, duration: 1})
    }
}

const Fullpage = React.forwardRef((props, ref) => (
    <ReactFullpage
        //fullpage options
        licenseKey={'Q85^XEW#h3'}
        scrollingSpeed={1000}
        navigation={true}
        navigationTooltips={["hero", "about me", "my work"]}
        responsiveWidth={768}
        anchors={["heroPage", "aboutPage", "projectsPage"]}
        onLeave={(origin, destination) => {
            const [cell] = destination.item.children;
            const [page] = cell.children;
            animation(destination.index, page.children);
        }}

        render={({state, fullpageApi}) => {
            return (
                <ReactFullpage.Wrapper ref={ref}>
                    <div className="section">
                        <HeroPage api={fullpageApi} id={"hero"} imgId={"heroImg"} textWrapperId={"heroText"}
                                  heroBtnId={"heroBtn"} link={"#aboutMe"}/>
                    </div>
                    <div className="section">
                        <AboutMePage api={fullpageApi} id={"aboutMe"}/>
                    </div>
                    <div className="section">
                        <MyWorkPage id={"myWork"}/>
                    </div>
                </ReactFullpage.Wrapper>
            );
        }}
    />
))

const App = () => {
    const ref = useRef(null);
    useEffect(() => {
        if(ref.current !== null) {
            const deref = ref.current.children;
            const fullPageWrapper = deref[0];
            const fullPageSections = fullPageWrapper.children;
            const [cell] = fullPageSections[0].children;
            const [heroPage] = cell.children;

            const heroImg = heroPage.children[0];
            const heroText = heroPage.children[2];
            const heroBtn = heroText.children[2];
            const heroArrowWrapper = heroPage.children[3];

            gsap.fromTo(heroImg, {y: '+=500'}, {y: 0, duration: 1});
            animation(0, heroPage.children);
            gsap.to(heroArrowWrapper.children[1],
                {y: "+=15", repeat: -1, duration: 0.7, yoyo: true, width: 2.65 + "vw"})
        }
    })

    return (
        <div ref={ref}>
            <Fullpage/>
        </div>
    );
}

export default App;

//Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
//<div>Icons made by <a href="https://www.flaticon.com/authors/roundicons" title="Roundicons">Roundicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
// /<div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>