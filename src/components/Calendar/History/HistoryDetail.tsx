import { HistoryProps } from '@/pages/Calendar';
import * as S from '@/styles/Calendar/History/HistoryDetail.style';
import HistoryHeader from '@/components/Calendar/Header/HistoryHeader';
import HistoryMain from '@/components/Calendar/Main/HistoryMain';

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
