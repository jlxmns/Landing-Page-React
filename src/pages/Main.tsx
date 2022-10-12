import Frontend from '../templates/frontend';
import MainPageMainText from '../organisms/MainPageMainText';
import MainPageImageColumn from '../organisms/MainPageImageColumn';

import * as S from './styles';

function Main() {
  return (
  <Frontend>
    <S.Container>
        <MainPageMainText />
        <MainPageImageColumn />
    </S.Container>
  </Frontend>);
}

export default Main
