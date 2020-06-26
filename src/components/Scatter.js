import React from "react";
import styled from "styled-components";

const ScatterWrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    flex-wrap: wrap;
    position: absolute;
    height: 50%;
    width: 50%;
    left: 0;
    bottom: 0;
    z-index: 0;
`;

const HalfSizeTriangles = styled.img`
    height: 100%;
    width: 100%;
`;

const Scatter = (props) => {
    return (
        <ScatterWrapper>
            <HalfSizeTriangles src={props.ScatterSource}/>
        </ScatterWrapper>
    )
}

export {Scatter};
