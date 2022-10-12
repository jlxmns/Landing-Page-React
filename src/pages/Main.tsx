import ButtonContact from '../atoms/ButtonContact';
import Frontend from '../templates/frontend';
import MainPageImage from '../../public/main-page-banner.png';
import * as S from './styles';
import CardActivity from '../molecules/CardActivity';

function Main() {
  return (
  <Frontend>
    <S.Container>
      <div>
        <h1>Design driven development of your web product</h1>
        <h6>We are a full service digital agency that builds immesive user experience.</h6>
        <ButtonContact />
      </div>
        <S.ImageColumn>
          <CardActivity />
          <img src={MainPageImage} alt="Uma mulher fazendo uma pesquisa." />
        </S.ImageColumn>
    </S.Container>
  </Frontend>);
}

export default Main
