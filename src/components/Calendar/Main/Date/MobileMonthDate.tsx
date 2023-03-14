import { useAppDispatch, useAppSelector } from '@/hooks/store';
import { toggleMobileCalendar } from '@/store/calendarSlice';
import { ReactComponent as ArrowIcon } from '@/assets/Icon/arrowIcon.svg';

function MobileMonthDate() {
  const calendar = useAppSelector((state) => state.calendar);
  const dispatch = useAppDispatch();
  const day: string[] = ['일', '월', '화', '수', '목', '금', '토'];

  return (
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

      {calendar.year === new Date().getFullYear() &&
        calendar.month === new Date().getMonth() + 1 &&
        calendar.date === new Date().getDate() && (
          <strong className="today">오늘</strong>
        )}

      <ArrowIcon />
    </button>
  );
}

export default MobileMonthDate;
