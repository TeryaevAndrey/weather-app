import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 20px;
    background-color: #fff;
`;

const LoaderStyle = styled.div`
    display: inline-flex;
    position: absolute;
    width: 50px;
    height: 50px;
    border: 8px solid #FAFAFA;
    border-radius: 50%;
    border-top: 8px solid blue;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    animation: LoaderAnim 2s linear infinite;

    @keyframes LoaderAnim {
        0% {
            transform: translate(-50%, -50%) rotate(0);
        }

        100% {
            transform: translate(-50%, -50%) rotate(360deg);
        }
    }
`;

function Loader() {
    return(
        <Wrapper>
            <LoaderStyle />
        </Wrapper>
    )
}

export default Loader;