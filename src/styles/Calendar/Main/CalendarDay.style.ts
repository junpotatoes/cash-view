import styled from 'styled-components';

export const CalendarDayContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.border};

  .day {
    display: flex;
    justify-content: center;
    width: calc(100% / 7);
    padding: 12px 0;
    border-right: 1px solid ${(props) => props.theme.border};

    &.red {
      color: ${(props) => props.theme.red};
    }

    &.blue {
      color: ${(props) => props.theme.blue};
    }
  }

  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;
