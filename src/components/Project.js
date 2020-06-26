import React from "react";
import styled from "styled-components";
import gitLogo from "../misc/images/github.png";
import scatterPng from "../misc/images/Scatter_Main.png";
import Button from "./Button";
import {Scatter} from "./Scatter";

const ProjectWrapper = styled.article`
    width: 25%;
    height: 45%;
    z-index: 1;
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
`;

const TextWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    background-color: ${props => props.theme.colors.accentBackground};
    box-shadow: 2px 2px 2px 1px #181b21;
`;

const StyledScatter = styled(Scatter)`
    position: absolute;
    left: 0;
    z-index: 0;
`;

const LinksWrapper = styled.div`
    height: 25%;
    width: 100%;
    display: flex;
    font-size: ${props => props.theme.fontSize.mediumSmall}vw;
    font-weight: bold;
    justify-content: space-evenly;
    align-items: center;
    text-decoration: none;
    color: ${props => props.theme.colors.textColor};
    z-index: 1;
`;

const LinkLogo = styled.img`
    height: 68%;
    border-radius: 55%;
    background-color: ${props => props.theme.colors.textColor};
`;

const TextSpan = styled.div`
    margin: 0 15%;
    font-size: ${props => props.theme.fontSize.xsmall}vw;
    text-align: center;
    z-index: 1;
`;

const Header = styled.div`
    font-size: ${props => props.theme.fontSize.medium}vw;
    font-weight: bold;
    text-align: center;
`;


const Project = (props) => {
    return (
        <ProjectWrapper>
            <TextWrapper>
                <Header>
                    {props.header}
                </Header>
                <TextSpan>
                    {props.text}
                </TextSpan>
                <LinksWrapper as="a" href={props.href}>
                    <LinkLogo src={gitLogo} alt={"Git"}/>
                    <Button primary>Check the source!</Button>
                </LinksWrapper>
                <StyledScatter ScatterSource={scatterPng} height={60} width={55}/>
            </TextWrapper>
        </ProjectWrapper>
    )
};

export default Project