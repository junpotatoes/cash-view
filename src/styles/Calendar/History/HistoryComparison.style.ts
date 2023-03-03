import styled from 'styled-components';

export const HistoryComparisonContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 18px;
  height: 114px;
  padding: 12px;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 4px;

  .today {
    font-size: 18px;
    text-align: center;
  }

  .prevMonth {
    font-size: 13px;
    text-align: center;
    font-weight: 700;
    color: ${(props) => props.theme.gray};
  }
`;
