import * as S from '../../../styles/Calendar/Main/CalendarDay.style';

function CalendarDay() {
  const day: string[] = ['일', '월', '화', '수', '목', '금', '토'];

  return (
    <S.CalendarDayContainer>
      {day.map((el, idx) => (
        <div
          key={idx}
          className={`day ${el === '일' ? 'red' : el === '토' ? 'blue' : ''}`}
        >
          {el}
        </div>
      ))}
    </S.CalendarDayContainer>
  );
}

export default CalendarDay;
