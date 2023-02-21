import * as S from '../../../styles/Calendar/Main/CalendarMain.style';
import CalendarDay from './CalendarDay';
import CalendarDate from './CalendarDate';
import { Props } from '../../../pages/Calendar';

function Main({
  calendar,
  setCalendar,
  isOpenMobileCalendar,
  setIsOpenMobileCalendar
}: Props) {
  return (
    <S.CalendarMainWrapper>
      <S.CalendarMainContainer>
        <CalendarDay />

        <CalendarDate
          calendar={calendar}
          setCalendar={setCalendar}
          isOpenMobileCalendar={isOpenMobileCalendar}
          setIsOpenMobileCalendar={setIsOpenMobileCalendar}
        />
      </S.CalendarMainContainer>
    </S.CalendarMainWrapper>
  );
}

export default Main;
