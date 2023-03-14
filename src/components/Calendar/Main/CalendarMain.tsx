import * as S from '@/styles/Calendar/Main/CalendarMain.style';
import CalendarDay from '@/components/Calendar/Main/CalendarDay';
import CalendarDate from '@/components/Calendar/Main/CalendarDate';
import { HistoryProps } from '@/components/Layout/Route';

function Main({ history }: HistoryProps) {
  return (
    <S.CalendarMainWrapper>
      <S.CalendarMainContainer>
        <CalendarDay />

        <CalendarDate history={history} />
      </S.CalendarMainContainer>
    </S.CalendarMainWrapper>
  );
}

export default Main;
