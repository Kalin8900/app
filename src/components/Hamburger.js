import React from "react";
import styled from "styled-components";

const HamburgerWrapper = styled.nav`
    background-color: ${props => props.theme.colors.textColor};
    position: fixed;
    top: 0;
    right: 0;
    width: 15vh;
    height: 15vh;
    z-index: 10;
    border-bottom-left-radius: 100%;
`;

const StrapWrapper = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    margin: 3vh 3vh;
    width: 10vw;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: flex-end;
    z-index: 10;
`;

const Strap = styled.div`
    background-color: ${props => props.theme.colors.mainBackground};
    width: 10vw;
    height: .75vh;
    margin: .5vh 0;
`;


const HamburgerMenu = () => {
    return(
        <HamburgerWrapper>
            <StrapWrapper>
                <Strap />
                <Strap />
                <Strap />
            </StrapWrapper>
        </HamburgerWrapper>
    )
}

export default HamburgerMenu;