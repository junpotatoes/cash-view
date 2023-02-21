import * as S from '../../../styles/Calendar/Main/CalendarDate.style';
import { Props } from '../../../pages/Calendar';
import { ReactComponent as ArrowIcon } from '../../../assets/Icon/arrowIcon.svg';

function CalendarDate({
  calendar,
  setCalendar,
  isOpenMobileCalendar,
  setIsOpenMobileCalendar
}: Props) {
  const startDay: number = new Date(
    calendar.year,
    calendar.month - 1,
    1
  ).getDay();
  const endDate: number = new Date(calendar.year, calendar.month, 0).getDate();
  const prevEndDate: number = new Date(
    calendar.year,
    calendar.month - 1,
    0
  ).getDate();
  const day: string[] = ['일', '월', '화', '수', '목', '금', '토'];

  const onClickCalendar = (name: string, date: number): void => {
    setCalendar({
      ...calendar,
      date: name === 'date' ? date : 0,
      prevDate: name === 'prevDate' ? date : 0,
      nextDate: name === 'nextDate' ? date : 0
    });

    setIsOpenMobileCalendar(!isOpenMobileCalendar);
  };

  return (
    <S.CalendarDateWrapper isOpenMobileCalendar={isOpenMobileCalendar}>
      <S.CalendarDateContainer
        isOpenMobileCalendar={isOpenMobileCalendar}
        date={calendar.date}
      >
        {Array(35)
          .fill(1)
          .map((el, idx) =>
            idx < startDay ? (
              <li
                key={idx}
                className={`date other ${
                  calendar.prevDate === prevEndDate - startDay + idx + 1
                    ? 'active'
                    : ''
                }`}
                onClick={() =>
                  onClickCalendar('prevDate', prevEndDate - startDay + idx + 1)
                }
              >
                {prevEndDate - startDay + idx + 1}
              </li>
            ) : idx <= endDate + startDay - 1 ? (
              <li
                key={idx}
                className={`date ${
                  calendar.date === idx - startDay + 1 ? 'active' : ''
                } ${
                  new Date(
                    `${calendar.year}-${calendar.month}-${idx - startDay + 1}`
                  ).getDay() === 0
                    ? 'red'
                    : new Date(
                        `${calendar.year}-${calendar.month}-${
                          idx - startDay + 1
                        }`
                      ).getDay() === 6
                    ? 'blue'
                    : ''
                }`}
                onClick={() => onClickCalendar('date', idx - startDay + 1)}
              >
                <strong className="currentMonthDate">
                  {idx - startDay + 1}
                </strong>
                <span className="currentMonthDay onlyMobile">
                  (
                  {
                    day[
                      new Date(
                        `${calendar.year}-${calendar.month}-${
                          idx - startDay + 1
                        }`
                      ).getDay()
                    ]
                  }
                  )
                </span>
              </li>
            ) : (
              <li
                key={idx}
                className={`date other ${
                  calendar.nextDate === idx - endDate - startDay + 1
                    ? 'active'
                    : ''
                }`}
                onClick={() =>
                  onClickCalendar('nextDate', idx - endDate - startDay + 1)
                }
              >
                {idx - endDate - startDay + 1}
              </li>
            )
          )}
      </S.CalendarDateContainer>

      <button
        type="button"
        className="openButton"
        onClick={() => setIsOpenMobileCalendar(true)}
      >
        <strong className="date">{calendar.date}</strong>
        <span className="day">
          {' '}
          (
          {
            day[
              new Date(
                `${calendar.year}-${calendar.month}-${calendar.date}`
              ).getDay()
            ]
          }
          )
        </span>
        <ArrowIcon />
      </button>
    </S.CalendarDateWrapper>
  );
}

export default CalendarDate;
