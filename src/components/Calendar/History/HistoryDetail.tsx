import { HistoryProps } from '../../../pages/Calendar';
import * as S from '../../../styles/Calendar/History/HistoryDetail.style';
import HistoryHeader from '../Header/HistoryHeader';
import HistoryMain from '../Main/HistoryMain';

export interface UpdateModalProps {
  updateModal: boolean;
  setUpdateModal: React.Dispatch<React.SetStateAction<boolean>>;
  id: number;
}

function HistoryDetail({ history }: HistoryProps) {
  return (
    <S.HistoryDetailContainer>
      <HistoryHeader history={history} />

      <HistoryMain history={history} />
    </S.HistoryDetailContainer>
  );
}

export default HistoryDetail;
