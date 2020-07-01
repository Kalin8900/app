import React from "react";
import styled from "styled-components";
import {Scatter} from "./Scatter";
import scatterPng from "../misc/images/Scatter_Main.png";

const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: -100vw;
    opacity: 0;
    visibility: 0;
    height: 100%;
    width: 100%;
    z-index: 6;
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
    background-color: ${props => props.theme.colors.textColor};
`;

const PageLink = styled.div`
    font-size: ${props => props.theme.fontSize.xlarge}vh;
    margin-top: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: .5vw solid ${props => props.theme.colors.mainBackground};
    color: ${props => props.theme.colors.mainBackground};
`;

const StyledScatter = styled(Scatter)`
    position: absolute;
    width: 100%;
    left: 0;
    z-index: 0;
`;

const MenuPage = (props) => {
    return (
        <Wrapper>
            <PageLink>
                Welcome
            </PageLink>
            <PageLink>
                About me
            </PageLink>
            <PageLink>
                My projects
            </PageLink>
        </Wrapper>
    )
};

export default MenuPage;