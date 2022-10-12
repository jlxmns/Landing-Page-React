import styled from "styled-components";

export const Container = styled.button`
    width: 200px;
    height: 60px;
    background: #17A4D0;
    border: 1px solid #17A4D0;
    border-radius: 100px;
    margin-top: 50px;
    font-weight: 500;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    transition: all 0.25s ease-out;

    &:hover {
        background-color: #f8fdff;
        color: #17A4D0;
    }
`;