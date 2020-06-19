import React from "react";
import styled from "styled-components";

const ArrowWrapper = styled.div`
    z-index: 2;
`;

const ArrowImage = styled.img`
    width: 100%;
    height: 100%;
`;

const Arrow = (props) => {
    return (
        <ArrowWrapper>
            <ArrowImage src={props.ArrowSrc} alt={"arrow"} />
        </ArrowWrapper>
    )
}

export default Arrow;
