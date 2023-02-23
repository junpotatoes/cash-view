import * as S from '../../../styles/Calendar/Modal/MonthModal.style';
import { CalendarModal } from '../Header/CalendarHeader';
import MonthModalHeader from './MonthModalHeader';
import MonthModalMain from './MonthModalMain';

function MonthModal({ isOpenCalendar, setIsOpenCalendar }: CalendarModal) {
  return (
    <S.MonthModalContainer isOpenCalendar={isOpenCalendar}>
      <MonthModalHeader />
      <MonthModalMain
        isOpenCalendar={isOpenCalendar}
        setIsOpenCalendar={setIsOpenCalendar}
      />
    </S.MonthModalContainer>
  );
}

export default MonthModal;
