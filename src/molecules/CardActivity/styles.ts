import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    top: 105px;
    left: 76px;
    width: 154px;
    height: 77px;
    background-color: #CA95FF;
    border-radius: 13px;
    color: #fff;
    padding: 12px;
    overflow: hidden;

    small {
        font-size: 12px;
    }

    strong {
        display: block;
        margin-top: 2px;
        font-size: 18px;
        font-weight: 400;
    }

    img {
        display: inline-block;
        margin: 0 0 0 2px;
    }

    i {
        width: 154px;
        height: 77px;
        position: absolute;
        border-radius: 100px;

        &.circle1 {
            left: 90px;
            top: -20px;
            background: rgba(255, 255, 255, 0.3);
            z-index: 1;
        }

        &.circle2{
            left: 39px;
            top: -68.5px;
            border: 1px solid rgba(255, 255, 255, 0.3);
            transform: rotate(-72.7deg);
            z-index: 2;
        }

        &.circle3 {
            left: 71px;
            top: 45px;
            background: #DAAAFF;
            transform: rotate(45deg);
            z-index: 0;
        }
    }
`;