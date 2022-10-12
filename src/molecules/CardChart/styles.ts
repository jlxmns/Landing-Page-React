import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    width: 210px;
    height: 210px;
    border-radius: 17px;
    background-color: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    bottom: -60px;
    left: 32px;

    > div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 30px 26px 0px 26px;
    }

    img {
        margin-left: 0px;
    }

    strong {
        font-weight: 500;
    }
`;

function generateBars() {
    const amountBars = [...Array(12).keys()];
    let styleSpan: any = [];

    amountBars.forEach((item) => {
        styleSpan.push(`
            div:nth-child(${item + 1}) {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                div {
                    background-color: #eff3fe;
                    height: 91px;
                    width: 2.1px;
                    border-radius: 5px;
                    display: flex;
                    justify-content: flex-end;

                    span {
                        background-color: #5236ff;
                        display: block;
                        max-height: ${Math.ceil(Math.random() * 100)}px; 
                        width: 3.5px;
                        border-radius: 5px;

                        animation: animationHeight 1s linear forwards;
                    }
                }
            }
            `
        );
    })

    return styleSpan.join('');
}

export const Chart = styled.div`

    small {
        font-size: 8px;
        color: #BACCFD;
        margin-top: 6px;
    }

    ${generateBars()};

    @keyframes animationHeight {
        from {
            height: 0px;
        }

        to {
            height: 91px;
        }
    }
`;