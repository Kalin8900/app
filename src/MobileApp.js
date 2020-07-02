import React, {useEffect, useRef, useState} from "react";
import {ThemeProvider} from "styled-components";
import HeroMobilePage from "./pages/mobile/HeroMobilePage";
import AboutMeMobilePage from "./pages/mobile/AboutMeMobilePage";
import MyWorkMobilePage from "./pages/mobile/MyWorkMobilePage";
import HamburgerMenu from "./components/Hamburger";
import MenuPage from "./components/MenuPage";
import {gsap} from "gsap";
import rootTheme from "./themes/root";

const MobileApp = (props) => {
    const menuPage = useRef(null);
    const hamburger = useRef(null);
    const [isMenuOpen, setMenu] = useState(false);
    const [scrollPos, setScrollPos] = useState(0);
    const [isHamburgerShown, setHamburger] = useState(true);

    const menuAction = () => {
        const tl = gsap.timeline({defaults: {ease: 'power2'}})
        const [page] = menuPage.current.children;
        const [hamburgerWrapper] = hamburger.current.children;
        const [menu] = hamburgerWrapper.children;

        if(!isMenuOpen)
        {
            gsap.set(page.children, {autoAlpha: 0});
            tl.to(page, {x: "+=100vw", autoAlpha: 1, duration: 1});
            tl.to(page.children, {autoAlpha: 1, duration: 1.5});
            tl.to(menu.children[1], {scaleX: 0, duration: 0.5}, "-=1.75");
            tl.to(menu.children[0], {duration: .4, y: "+=1.75vh"}, "-=1");
            tl.to(menu.children[2], {duration: .4, y: "-=1.75vh"}, "-=1");
            tl.to(menu.children[2], {rotation: -45, duration: .4}, "-=.5");
            tl.to(menu.children[0], {rotation: 45, duration: .4}, "-=.5");
        }
        else
        {
            tl.to([menu.children[0], menu.children[2]], {rotation: 0, duration: .4});
            tl.to(menu.children[1], {scaleX: 1}, "-=4");
            tl.to([menu.children[0], menu.children[2]], {y: 0, duration: .4});
            tl.to(page.children, {autoAlpha: 0, duration: .4});
            tl.to(menuPage.current.children, {x: 0, duration: 1.5});
            setHamburger(prevState => !prevState);
            tl.to(hamburger.current.children, {x: "+=70%", y: "-=70%", duration: 1, ease: "SlowMo"}, "-=1.5");
        }
        setMenu(prevState => !prevState);
    }

    const hideHamburger = () => {
        if(isHamburgerShown && !isMenuOpen)
        {
            setHamburger(prevState => !prevState);
            gsap.to(hamburger.current.children, {x: "+=70%", y: "-=70%", duration: 1, ease: "SlowMo"});
        }
    }

    const showHamburger = () => {
        if(!isHamburgerShown)
        {
            setHamburger(prevState => !prevState);
            gsap.to(hamburger.current.children, {x: 0, y: 0, duration: 1, ease: "SlowMo"});
        }
    }

    const handleScroll = () => {
        const curY = window.pageYOffset;
        if(scrollPos > curY)
            showHamburger();
        else
            hideHamburger();
        setScrollPos(curY);
    }

    useEffect(() => {
        window.onscroll = handleScroll;
    })

    const moveHero = () => {
        gsap.to(window, {scrollTo: {y: "#hero"}, duration: 1});
        menuAction();
    }
    const moveAbout = () => {
        gsap.to(window, {scrollTo: {y: "#aboutMe"}, duration: 1});
        menuAction();
    }
    const moveProjects = () => {
        gsap.to(window, {scrollTo: {y: "#myWork"}, duration: 1});
        menuAction();
    }

    return (
        <div>
            <ThemeProvider theme={rootTheme}>
                <HeroMobilePage id={"hero"}/>
                <div ref={hamburger} onClick={menuAction}>
                    <HamburgerMenu />
                </div>
                <div ref={menuPage}>
                    <MenuPage about={moveAbout} hero={moveHero} projects={moveProjects}/>
                </div>
                <AboutMeMobilePage id={"aboutMe"}/>
                <MyWorkMobilePage id={"myWork"}/>
            </ThemeProvider>
        </div>
    )
}

export default MobileApp;