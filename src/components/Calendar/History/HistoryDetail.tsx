import * as S from '../../../styles/Calendar/History/HistoryDetail.style';
import HistoryDate from './HistoryDate';

function HistoryDetail() {
  const history = [
    {
      value: '수입',
      category: '월급',
      content: '월급 받음',
      amount: 3000000
    },
    {
      value: '지출',
      category: '교통',
      content: '아침에 택시',
      amount: 9000
    },
    {
      value: '지출',
      category: '교통',
      content: '점심에 택시',
      amount: 9000
    },
    {
      value: '지출',
      category: '교통',
      content: '저녁에 택시',
      amount: 9000
    },
    {
      value: '지출',
      category: '식비',
      content: '아침밥',
      amount: 12000
    },
    {
      value: '지출',
      category: '식비',
      content: '점심밥',
      amount: 12000
    },
    {
      value: '지출',
      category: '식비',
      content: '저녁밥',
      amount: 12000
    }
  ];

  return (
    <S.HistoryDetailContainer>
      <div className="headerBox">
        <HistoryDate />
        <div className="infoBox">
          <strong className="blue">
            수입{' '}
            {history
              .filter((el) => el.value === '수입')
              .map((el) => el.amount)
              .reduce((acc, cur) => {
                return acc + cur;
              }, 0)
              .toLocaleString('ko-KR')}
          </strong>
          <strong className="red">
            지출{' '}
            {history
              .filter((el) => el.value === '지출')
              .map((el) => el.amount)
              .reduce((acc, cur) => {
                return acc + cur;
              }, 0)
              .toLocaleString('ko-KR')}
          </strong>
        </div>
      </div>

      <div className="mainBox">
        <h4 className="mainTitle">내역 상세</h4>
        <ul className="historyList">
          {history.map((el, idx) => (
            <li key={idx} className="historyItem">
              <p className="category">{el.category}</p>
              <div className="detailContent">
                <p className="content">{el.content}</p>
                <strong
                  className={`amount ${el.value === '수입' ? 'blue' : 'red'}`}
                >
                  {el.amount.toLocaleString('ko-KR')}
                </strong>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </S.HistoryDetailContainer>
  );
}

export default HistoryDetail;
