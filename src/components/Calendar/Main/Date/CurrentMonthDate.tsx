import { useAppDispatch, useAppSelector } from '@/hooks/store';
import { clickCalendar } from '@/store/calendarSlice';
import { CalendarDateProps } from '@/components/Calendar/Main/CalendarDate';

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
      <strong className="currentMonthDate">{date}</strong>

      <span className="currentMonthDay onlyMobile">
        ({day[new Date(`${calendar.year}-${calendar.month}-${date}`).getDay()]})
      </span>

      <div className="calendarAmountBox">
        <p className="blue">
          {checkTotal('수입', calendar.year, calendar.month, date)
            ? `+ ${checkTotal(
                '수입',
                calendar.year,
                calendar.month,
                date
              ).toLocaleString('ko-KR')}`
            : ' '}
        </p>

        <p className="red">
          {checkTotal('지출', calendar.year, calendar.month, date)
            ? `- ${checkTotal(
                '지출',
                calendar.year,
                calendar.month,
                date
              ).toLocaleString('ko-KR')}`
            : ' '}
        </p>
      </div>
    </li>
  );
}

export default CurrentMonthDate;
