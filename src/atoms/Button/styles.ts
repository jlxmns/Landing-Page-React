import styled from "styled-components";

export const Container = styled.button`
    width: 130px;
    height: 42px;
    border: 1px solid #17a4d0;
    border-radius: 4px;
    color: #17a4d0;
    font-size: 14px;
    font-weight: 500;
    margin-left: 25px;
    transition: all 0.25s ease-out;

    &:hover {
        color: #fff;
        background-color: #17a4d0;
        box-shadow: 0px 0px 17px -8px #17a4d0;
    }
`;