import * as S from '../../../styles/Calendar/Main/CalendarMain.style';
import CalendarDay from './CalendarDay';
import CalendarDate from './CalendarDate';

function Main() {
  return (
    <S.CalendarMainWrapper>
      <S.CalendarMainContainer>
        <CalendarDay />

        <CalendarDate />
      </S.CalendarMainContainer>
    </S.CalendarMainWrapper>
  );
}

export default Main;
