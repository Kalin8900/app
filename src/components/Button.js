import styled from "styled-components";


const Button = styled.div`
    padding: 0 2vw;
    position: relative;
    text-align: center;
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
   
&:before, &:after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    transition: 0.3s;
}

&:before {
    border: solid 3px ${props => props.primary ? props.theme.colors.textColor : props.theme.colors.accentBackground};
    top: 0;
    left: 0;
    box-shadow: -1vh 1vh 1vh rgba(0, 0, 0, 0.2);
    z-index: -1;
}

&:after {
    background-color: ${props => props.background === "dark" ? props.theme.colors.accentBackground : props.theme.colors.blueAccent};
    top: 1vh;
    right: 1vh;
    z-index: -2;
}

&:hover {
    cursor: pointer;
}

&:hover::after {
    transform: translate(1vh, -1vh);
}

&:hover::before {
    transform: translate(-1.5vh, .5vh);
    z-index: -3;
    opacity: .6;
}
`;

export default Button;