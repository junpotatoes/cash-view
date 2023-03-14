import * as S from '@/styles/Calendar/Modal/MonthModal.style';
import { CalendarModal } from '@/components/Calendar/Header/CalendarHeader';
import MonthModalHeader from '@/components/Calendar/Modal/MonthModalHeader';
import MonthModalMain from '@/components/Calendar/Modal/MonthModalMain';

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
