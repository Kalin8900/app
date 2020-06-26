import React from "react";
import styled from "styled-components";

const StrapWrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    margin: 4vh 5vh;
    width: 10vw;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: flex-end;
    z-index: 10;
`;

const Strap = styled.div`
    background-color: ${props => props.theme.colors.textColor};
    width: 10vw;
    height: .75vh;
    margin: .5vh 0;
`;


const HamburgerMenu = () => {
    return(
        <StrapWrapper>
            <Strap />
            <Strap />
            <Strap />
        </StrapWrapper>
    )
}

export default HamburgerMenu;