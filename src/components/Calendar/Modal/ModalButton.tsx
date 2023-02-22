import { CalendarModal } from '../Header/CalendarHeader';
import * as S from '../../../styles/Calendar/Modal/ModalButton.style';
import { ReactComponent as CalendarIcon } from '../../../assets/Icon/calendarIcon.svg';

function CalendarModalButton({
  isOpenCalender,
  setIsOpenCalendar
}: CalendarModal) {
  return (
    <S.CalendarModalButtonContainer
      onClick={() => setIsOpenCalendar(!isOpenCalender)}
    >
      <CalendarIcon />
    </S.CalendarModalButtonContainer>
  );
}

export default CalendarModalButton;
