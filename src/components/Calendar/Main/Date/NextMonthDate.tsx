import { useAppDispatch, useAppSelector } from '@/hooks/store';
import { clickCalendar } from '@/store/calendarSlice';
import { CalendarDateProps } from '@/components/Calendar/Main/CalendarDate';

function NextMonthDate({ date, checkTotal }: CalendarDateProps) {
  const calendar = useAppSelector((state) => state.calendar);
  const dispatch = useAppDispatch();

  return (
    <li
      className={`date other ${
        calendar.nextMonthDate === date ? 'active' : ''
      }`}
      onClick={() =>
        dispatch(
          clickCalendar({
            name: 'nextMonthDate',
            date: date
          })
        )
      }
    >
      <div className="calendarDateBox">
        <h3>{date}</h3>

        {(calendar.month === 12 ? calendar.year + 1 : calendar.year) ===
          new Date().getFullYear() &&
          (calendar.month === 12 ? 1 : calendar.month + 1) ===
            new Date().getMonth() + 1 &&
          date === new Date().getDate() && (
            <strong className="today">today</strong>
          )}
      </div>

      <div className="calendarAmountBox">
        <p className="blue">
          {checkTotal(
            '수입',
            calendar.month === 12 ? calendar.year + 1 : calendar.year,
            calendar.month === 12 ? 1 : calendar.month + 1,
            date
          )
            ? `+ ${checkTotal(
                '수입',
                calendar.month === 12 ? calendar.year + 1 : calendar.year,
                calendar.month === 12 ? 1 : calendar.month + 1,
                date
              ).toLocaleString('ko-KR')}`
            : ' '}
        </p>

        <p className="red">
          {checkTotal(
            '지출',
            calendar.month === 12 ? calendar.year + 1 : calendar.year,
            calendar.month === 12 ? 1 : calendar.month + 1,
            date
          )
            ? `- ${checkTotal(
                '지출',
                calendar.month === 12 ? calendar.year + 1 : calendar.year,
                calendar.month === 12 ? 1 : calendar.month + 1,
                date
              ).toLocaleString('ko-KR')}`
            : ' '}
        </p>
      </div>
    </li>
  );
}

export default NextMonthDate;
