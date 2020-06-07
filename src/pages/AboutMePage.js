import React from "react";
import styled from "styled-components";
import blueTriangle from "../misc/images/tr_3.png"
import {PageWrapper} from "../components/PageWrapper";
import {StyledTriangle} from "../components/Triangles"

const AboutMePageWrapper = styled(PageWrapper)`
`;

const RotatedTriangleImg = styled(StyledTriangle)`
  transform: rotate(180deg);
  z-index: 2;
`;

function AboutMePage() {
    return(
        <AboutMePageWrapper>
            <RotatedTriangleImg as="img" src={blueTriangle} alt="blue" />
        </AboutMePageWrapper>
    )
}

export {AboutMePage};