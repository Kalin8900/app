import React from "react";
import styled, {ThemeProvider} from "styled-components";
import blueTriangle from "../misc/images/tr_3.png";
import RotatedTriangleImg from "../components/RotatedTriangle";
import PageWrapper from "../components/PageWrapper";
import rootTheme from "../themes/root";

const HireMePageWrapper = styled(PageWrapper)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: -2;
`;


const HireMePage = () => {
    return(
        <ThemeProvider theme={rootTheme}>
            <HireMePageWrapper>
                <RotatedTriangleImg as="img" src={blueTriangle} alt="blue" />
            </HireMePageWrapper>
        </ThemeProvider>
    )
}

export {HireMePage};


