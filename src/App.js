import React, {useRef, useEffect} from 'react';
import {HeroPage} from "./pages/HeroPage"
import {AboutMePage} from "./pages/AboutMePage";
import {HireMePage} from "./pages/HireMePage";
import {MyWorkPage} from "./pages/MyWorkPage";
import {gsap} from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";


function App() {
    const ref = useRef(null);
    useEffect(() => {
        const deref = ref.current.children;
        const heroPage = deref[0];
        const aboutMePage = deref[1];
        const myWorkPage = deref[2];
        const heroImg = heroPage.children[0];
        const heroText = heroPage.children[2];
        const heroBtn = heroText.children[2];

        gsap.set([heroImg, heroText, heroBtn], {autoAlpha: 0});
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline({defaults: {ease: 'power2'}});

        tl.fromTo(heroImg,{y: '+=500'}, {y: 0, duration: 1} );
        tl.to(heroImg,{autoAlpha: 1, duration: 1}, '-=0.5');
        tl.fromTo(heroText,{x: '+=200'}, {x: 0, autoAlpha: 1, duration: 1}, '-=0.5');
        tl.fromTo(heroBtn,{y: '-=50'}, {y: 0, autoAlpha: 1, duration: 1});
        const tl2 = gsap.timeline({defaults: {ease: 'ease-in-out', duration: 2}})
        let pages = gsap.utils.toArray("section");

        let currentPage = pages[0];

        gsap.set("body", {height: ((pages.length) * 100) + "%"});

        pages.forEach((page, i) => {

            ScrollTrigger.create({
                start: () => (i - 0.5) * window.outerHeight,
                end: () => (i + 0.5) * window.outerHeight,
                onToggle: self => self.isActive && setPage(page),
                markers: true
            })
        })
        const setPage = (newPage) => {

            if(newPage !== currentPage)
            {
                gsap.to(currentPage, {scale: 0.8, autoAlpha: 0});
                gsap.to(newPage, {scale: 1, autoAlpha: 1});
                currentPage = newPage;
            }
        }
        heroBtn.addEventListener('click', setPage(pages[1]));
    })


    return (
        <div ref={ref} className={"panel"}>
            <HeroPage id={"hero"} imgId={"heroImg"} textWrapperId={"heroText"} heroBtnId={"heroBtn"} link={"#aboutMe"}/>
            <AboutMePage id={"aboutMe"}/>
            <MyWorkPage id={"myWork"}/>
        </div>
    );
}

export default App;

//<div>Icons made by <a href="https://www.flaticon.com/authors/roundicons" title="Roundicons">Roundicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>