import * as S from './styles';
import UpArrow from '../../../public/up-arrow.svg';

const CardActivity = () => {
    return (
    <S.Container>
        <small>Activity</small>
        <strong>18 <img src={UpArrow} alt="Arrow pointing up." /></strong>
        <i className='circle1'></i>
        <i className='circle2'></i>
        <i className='circle3'></i>
    </S.Container>
    );
}

export default CardActivity;