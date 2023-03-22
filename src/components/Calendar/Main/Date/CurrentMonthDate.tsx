import { useAppDispatch, useAppSelector } from '@/hooks/store';
import { clickCalendar } from '@/store/calendarSlice';
import { CalendarDateProps } from '@/components/Calendar/Main/CalendarDate';
import { ReactComponent as ArrowIcon } from '@/assets/Icon/arrowIcon.svg';

function CurrentMonthDate({ date, checkTotal }: CalendarDateProps) {
  const calendar = useAppSelector((state) => state.calendar);
  const dispatch = useAppDispatch();
  const day: string[] = ['일', '월', '화', '수', '목', '금', '토'];

  return (
    <li
      className={`date ${calendar.date === date ? 'active' : ''} ${
        new Date(`${calendar.year}-${calendar.month}-${date}`).getDay() === 0
          ? 'red'
          : new Date(`${calendar.year}-${calendar.month}-${date}`).getDay() ===
            6
          ? 'blue'
          : ''
      }`}
      onClick={() =>
        dispatch(
          clickCalendar({
            name: 'date',
            date: date
          })
        )
      }
    >
      <div className="calendarDateBox">
        <h3 className="currentMonthDate">{date}</h3>

        <span className="currentMonthDay onlyMobile">
          (
          {day[new Date(`${calendar.year}-${calendar.month}-${date}`).getDay()]}
          )
        </span>

        {calendar.year === new Date().getFullYear() &&
          calendar.month === new Date().getMonth() + 1 &&
          date === new Date().getDate() && (
            <strong className="today">Today</strong>
          )}
      </div>

      <div className="calendarAmountBox">
        {checkTotal('수입', calendar.year, calendar.month, date) ? (
          <p className="blue">
            {`+ ${checkTotal(
              '수입',
              calendar.year,
              calendar.month,
              date
            ).toLocaleString('ko-KR')}`}
          </p>
        ) : (
          ''
        )}

        {checkTotal('지출', calendar.year, calendar.month, date) ? (
          <p className="red">
            {`- ${checkTotal(
              '지출',
              calendar.year,
              calendar.month,
              date
            ).toLocaleString('ko-KR')}`}
          </p>
        ) : (
          ''
        )}
      </div>
    </li>
  );
}

export default CurrentMonthDate;
