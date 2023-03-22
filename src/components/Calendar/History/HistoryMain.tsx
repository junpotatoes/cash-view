import { useAppSelector } from '@/hooks/store';
import { HistoryProps } from '@/components/Layout/Route';
import HistoryItem from '@/components/Calendar/History/HistoryItem';

function HistoryMain({ history }: HistoryProps) {
  const calendar = useAppSelector((state) => state.calendar);

  const checkDetail = (year: number, month: number, date: number) => {
    return history.map(
      (el, idx) =>
        el.year === year &&
        el.month === month &&
        el.date === date && <HistoryItem el={el} key={idx} />
    );
  };

  return (
    <div className="mainBox">
      <h4 className="mainTitle">내역 상세</h4>

      {history.filter(
        (el) =>
          el.year === calendar.year &&
          el.month === calendar.month &&
          el.date === calendar.date
      )[0] ? (
        <ul className="historyList">
          {calendar.prevMonthDate
            ? checkDetail(
                calendar.month === 1 ? calendar.year - 1 : calendar.year,
                calendar.month === 1 ? 12 : calendar.month - 1,
                calendar.prevMonthDate
              )
            : calendar.nextMonthDate
            ? checkDetail(
                calendar.month === 12 ? calendar.year + 1 : calendar.year,
                calendar.month === 12 ? 1 : calendar.month + 1,
                calendar.nextMonthDate
              )
            : checkDetail(calendar.year, calendar.month, calendar.date)}
        </ul>
      ) : (
        <div className="noData">
          <p>데이터가 없습니다</p>
          <p>수입/지출 내역을 입력해주세요</p>
        </div>
      )}
    </div>
  );
}

export default HistoryMain;
