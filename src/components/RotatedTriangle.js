import styled from "styled-components";
import StyledTriangle from "./Triangles";

const RotatedTriangleImg = styled(StyledTriangle)`
    transform: rotate(180deg);
    z-index: 1;
`;

export default RotatedTriangleImg;
