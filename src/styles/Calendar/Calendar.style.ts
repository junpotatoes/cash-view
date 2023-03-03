import styled from 'styled-components';

export const CalendarContainer = styled.div`
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
`;
