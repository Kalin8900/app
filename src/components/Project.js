import React from "react";
import styled from "styled-components";
import gitLogo from "../misc/images/github.png";
import scatterPng from "../misc/images/Scatter_Main.png";
import Button from "./Button";
import {Scatter} from "./Scatter";

const ProjectWrapper = styled.div`
    width: 75vw;
    height: 65vh;
    background-color: ${props => props.theme.colors.accentBackground};
    z-index: 1;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    box-shadow: 2px 2px 2px 1px #181b21;
`;

const Logo = styled.img`
    margin: .5vw;
    height: 100%;
    opacity: .9;
`;

const UsedTechnologies = styled.div`
    height: 25%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: ${props => props.theme.fontSize.large}vw;
    font-weight: bold;
    margin-left: 2.5vw;
`;

const LinksWrapper = styled.div`
    height: 25%;
    display: flex;
    font-size: ${props => props.theme.fontSize.medium}vw;
    font-weight: bold;
    justify-content: space-around;
    align-items: center;
    text-decoration: none;
    color: ${props => props.theme.colors.textColor};
`;

const LinkLogo = styled.img`
    height: 55%;
    margin-right: 1vw;
`;

const LogoWrapper = styled.div`
    margin-top: .5vh;
    display: flex;
    height: 25%;
    justify-content: center;
    align-items: center;
`;

const TextWrapper = styled.div`
    margin-top: .5vh;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-between;
    font-size: ${props => props.theme.fontSize.small}vw;
    width: 65%;
    text-align: center;
`;

const TextSpan = styled.span`
    margin: 0 15%;
`;

const Project = (props) => {

    return (
        <ProjectWrapper>
            <LogoWrapper>
                <Logo src={props.logo}/>
            </LogoWrapper>
            <Scatter ScatterSource={scatterPng} height={50} width={15}/>
            <TextWrapper>
                <UsedTechnologies> {props.ProjectType} project</UsedTechnologies>
                <TextSpan>
                    {props.text}
                </TextSpan>
                <LinksWrapper as="a" href={props.href}>
                    <LinkLogo src={gitLogo} alt={"Git"}/>
                    <Button primary>Check the source!</Button>
                </LinksWrapper>
            </TextWrapper>
        </ProjectWrapper>
    )
};

export default Project