import CardActivity from "../../molecules/CardActivity";
import MainPageImage from "../../../public/main-page-banner.png";
import * as S from "./styles";
import CardChart from "../../molecules/CardChart";

const MainPageImageColumn = () => {
    return (
        <S.Container>
          <CardActivity />
          <CardChart />
          <img src={MainPageImage} alt="Uma mulher fazendo uma pesquisa." />
        </S.Container>
    );
}

export default MainPageImageColumn;