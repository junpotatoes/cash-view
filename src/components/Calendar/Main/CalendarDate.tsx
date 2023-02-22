import * as S from '../../../styles/Calendar/Main/CalendarDate.style';
import { ReactComponent as ArrowIcon } from '../../../assets/Icon/arrowIcon.svg';
import { useAppDispatch, useAppSelector } from '../../../hooks/store';
import {
  clickCalendar,
  toggleMobileCalendar
} from '../../../store/calendarSlice';

function CalendarDate() {
  const calendar = useAppSelector((state) => state.calendar);
  const dispatch = useAppDispatch();

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

  return (
    <S.CalendarDateWrapper isOpenMobileCalendar={calendar.mobileCalendar}>
      <S.CalendarDateContainer isOpenMobileCalendar={calendar.mobileCalendar}>
        {Array(35)
          .fill(1)
          .map((el, idx) =>
            idx < startDay ? (
              <li
                key={idx}
                className={`date other ${
                  calendar.prevMonthDate === prevEndDate - startDay + idx + 1
                    ? 'active'
                    : ''
                }`}
                onClick={() =>
                  dispatch(
                    clickCalendar({
                      name: 'prevMonthDate',
                      date: prevEndDate - startDay + idx + 1
                    })
                  )
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
                onClick={() =>
                  dispatch(
                    clickCalendar({
                      name: 'date',
                      date: idx - startDay + 1
                    })
                  )
                }
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
                  calendar.nextMonthDate === idx - endDate - startDay + 1
                    ? 'active'
                    : ''
                }`}
                onClick={() =>
                  dispatch(
                    clickCalendar({
                      name: 'nextMonthDate',
                      date: idx - endDate - startDay + 1
                    })
                  )
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
        onClick={() => dispatch(toggleMobileCalendar(true))}
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
