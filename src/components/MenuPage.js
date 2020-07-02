import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    position: fixed;
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

const MenuPage = (props) => {
    return (
        <Wrapper>
            <PageLink onClick={props.hero}>
                Welcome
            </PageLink>
            <PageLink onClick={props.about}>
                About me
            </PageLink>
            <PageLink onClick={props.projects}>
                My projects
            </PageLink>
        </Wrapper>
    )
};

export default MenuPage;