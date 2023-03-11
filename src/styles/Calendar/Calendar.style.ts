import styled from 'styled-components';

export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .calendarTop {
    display: flex;
    column-gap: 12px;
    width: 80%;

    .calendarBox {
      width: 100%;
    }

    .historyBox {
      flex-shrink: 0;
      width: 250px;
      padding-top: 72px;
    }

    @media ${(props) => props.theme.mobile} {
      flex-direction: column;
      row-gap: 12px;

      .historyBox {
        width: 100%;
        padding-top: 0;
      }
    }
  }

  .calendarBottom {
    display: flex;
    align-items: center;
    column-gap: 48px;
    width: 80%;
    padding: 12px 4px;

    @media ${(props) => props.theme.mobile} {
      flex-direction: column;
      align-items: flex-start;
      row-gap: 12px;
    }

    .amount {
      font-size: 16px;
      font-weight: 700;
    }
  }
`;
