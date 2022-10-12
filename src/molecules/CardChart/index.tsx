import { useCallback } from "react";
import LeftArrow from "../../../public/left-arrow.svg";
import RightArrow from "../../../public/right-arrow.svg";

import * as S from "./styles";

const CardChart = () => {
    const amountBars = Array.from(Array(12).keys());

    const fillZero = useCallback((value: number) => {
        const number = (value + 1).toString();

        return number.padStart(2, "0");
    }, []);

    return (
      <S.Container>
        <div>
          <img src={LeftArrow} alt="Seta para esquerda" />
          <strong>Stats</strong>
          <img src={RightArrow} alt="Seta para direita" />
        </div>
        <S.Chart>
          {amountBars.map((item) => (
            <div key={String(item)}>
              <div>
                <span></span>
              </div>
              <small>{fillZero(item)}</small>
            </div>
          ))}
        </S.Chart>
      </S.Container>
    );
}

export default CardChart;