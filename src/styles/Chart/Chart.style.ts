import styled from 'styled-components';

export const ChartWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ChartContainer = styled.div`
  width: 80%;
`;

export const PieChartBox = styled.div`
  display: flex;
  justify-content: center;

  .pieBox {
    width: 65%;
    max-width: 280px;
  }
`;

export const BarChartConatainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const BarChartBox = styled.div`
  width: 70%;
  min-height: 340px;
  height: 100%;
`;

export const NoDataBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;

  border-radius: 5px;
  font-size: 1.2rem;
`;

export const NoIncomeDataBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${(props) => props.theme.active};
  height: 280px;
  font-size: 0.8rem;
  margin-right: 10px;
`;

export const NoOutcomeDataBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${(props) => props.theme.red};
  height: 280px;
  font-size: 0.8rem;
  margin-left: 10px;
`;
