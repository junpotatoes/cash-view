import * as S from '../../../styles/Calendar/Main/CalendarMain.style';
import CalendarDay from './CalendarDay';
import CalendarDate from './CalendarDate';
import { HistoryProps } from '../../../pages/Calendar';

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
