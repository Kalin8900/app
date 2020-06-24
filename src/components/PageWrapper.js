import styled from "styled-components";

const PageWrapper = styled.section`
    width: 100%;
    height: 100vh;
    background-color: ${props => props.theme.colors.mainBackground};
    position: relative;
    font-family: ${props => props.theme.fontFamily};
`;

export default PageWrapper;
