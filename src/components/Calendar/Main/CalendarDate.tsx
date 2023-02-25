import * as S from '../../../styles/Calendar/Main/CalendarDate.style';
import { ReactComponent as ArrowIcon } from '../../../assets/Icon/arrowIcon.svg';
import { useAppDispatch, useAppSelector } from '../../../hooks/store';
import {
  clickCalendar,
  toggleMobileCalendar
} from '../../../store/calendarSlice';
import { HistoryProps } from '../../../pages/Calendar';

function CalendarDate({ history }: HistoryProps) {
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

  const checkTotal = (
    value: string,
    year: number,
    month: number,
    date: number
  ): number => {
    return history
      .filter(
        (el) =>
          el.value === value &&
          el.year === year &&
          el.month === month &&
          el.date === date
      )
      .map((el) => el.amount)
      .reduce((acc, cur) => acc + cur, 0);
  };

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

                <div className="calendarAmountBox">
                  <p className="blue">
                    {checkTotal(
                      '수입',
                      calendar.month === 1 ? calendar.year - 1 : calendar.year,
                      calendar.month === 1 ? 12 : calendar.month - 1,
                      prevEndDate - startDay + idx + 1
                    )
                      ? `+ ${checkTotal(
                          '수입',
                          calendar.month === 1
                            ? calendar.year - 1
                            : calendar.year,
                          calendar.month === 1 ? 12 : calendar.month - 1,
                          prevEndDate - startDay + idx + 1
                        ).toLocaleString('ko-KR')}`
                      : ' '}
                  </p>

                  <p className="red">
                    {checkTotal(
                      '지출',
                      calendar.month === 1 ? calendar.year - 1 : calendar.year,
                      calendar.month === 1 ? 12 : calendar.month - 1,
                      prevEndDate - startDay + idx + 1
                    )
                      ? `- ${checkTotal(
                          '지출',
                          calendar.month === 1
                            ? calendar.year - 1
                            : calendar.year,
                          calendar.month === 1 ? 12 : calendar.month - 1,
                          prevEndDate - startDay + idx + 1
                        ).toLocaleString('ko-KR')}`
                      : ' '}
                  </p>
                </div>
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
                <div className="calendarAmountBox">
                  <p className="blue">
                    {checkTotal(
                      '수입',
                      calendar.year,
                      calendar.month,
                      idx - startDay + 1
                    )
                      ? `+ ${checkTotal(
                          '수입',
                          calendar.year,
                          calendar.month,
                          idx - startDay + 1
                        ).toLocaleString('ko-KR')}`
                      : ' '}
                  </p>

                  <p className="red">
                    {checkTotal(
                      '지출',
                      calendar.year,
                      calendar.month,
                      idx - startDay + 1
                    )
                      ? `- ${checkTotal(
                          '지출',
                          calendar.year,
                          calendar.month,
                          idx - startDay + 1
                        ).toLocaleString('ko-KR')}`
                      : ' '}
                  </p>
                </div>
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

                <div className="calendarAmountBox">
                  <p className="blue">
                    {checkTotal(
                      '수입',
                      calendar.month === 12 ? calendar.year + 1 : calendar.year,
                      calendar.month === 12 ? 1 : calendar.month + 1,
                      prevEndDate - startDay + idx + 1
                    )
                      ? `+ ${checkTotal(
                          '수입',
                          calendar.month === 12
                            ? calendar.year + 1
                            : calendar.year,
                          calendar.month === 12 ? 1 : calendar.month + 1,
                          prevEndDate - startDay + idx + 1
                        ).toLocaleString('ko-KR')}`
                      : ' '}
                  </p>

                  <p className="red">
                    {checkTotal(
                      '지출',
                      calendar.month === 12 ? calendar.year + 1 : calendar.year,
                      calendar.month === 12 ? 1 : calendar.month + 1,
                      prevEndDate - startDay + idx + 1
                    )
                      ? `- ${checkTotal(
                          '지출',
                          calendar.month === 12
                            ? calendar.year + 1
                            : calendar.year,
                          calendar.month === 12 ? 1 : calendar.month + 1,
                          prevEndDate - startDay + idx + 1
                        ).toLocaleString('ko-KR')}`
                      : ' '}
                  </p>
                </div>
              </li>
            )
          )}
      </S.CalendarDateContainer>

      <button
        type="button"
        className="openButton"
        onClick={() => dispatch(toggleMobileCalendar({ mobileCalendar: true }))}
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
