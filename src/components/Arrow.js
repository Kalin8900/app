import React from "react";
import styled from "styled-components";

const ArrowWrapper = styled.div`
    z-index: 5;
    &:hover {
    fill: red;
    }
`;

const ArrowImage = styled.svg`
    //width: 100%;
    //height: 100%;
    z-index: 10;
    fill:red;
`;

const Arrow = (props) => {
    return (
        <ArrowWrapper>
            <ArrowImage src={props.ArrowSrc} width={"100%"} height={"100%"}/>
        </ArrowWrapper>
    )
}

export default Arrow;
