import styled from 'styled-components';

export const CalendarDateWrapper = styled.div<{
  isOpenMobileCalendar: boolean;
}>`
  position: relative;

  .openButton {
    display: none;

    @media ${(props) => props.theme.mobile} {
      position: relative;
      visibility: ${(props) =>
        props.isOpenMobileCalendar ? 'hidden' : 'visible'};
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      height: 65px;
      padding-left: 12px;
      background-color: ${(props) => props.theme.active};

      .date,
      .day {
        font-size: 16px;
        font-weight: 700;
        color: ${(props) => props.theme.white};
      }

      svg {
        position: absolute;
        top: 50%;
        right: 12px;
        width: 24px;
        height: 24px;
        fill: ${(props) => props.theme.gray};
        transform: translateY(-50%) rotate(90deg);
      }
    }
  }
`;

export const CalendarDateContainer = styled.ol<{
  isOpenMobileCalendar: boolean;
}>`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-auto-rows: minmax(88px, auto);

  .date {
    padding: 4px;
    border-right: 1px solid ${(props) => props.theme.border};
    border-bottom: 1px solid ${(props) => props.theme.border};
    font-size: 16px;
    font-weight: 700;
    background-color: ${(props) => props.theme.white};
    transition: color 0.3s, background-color 0.5s;

    .onlyMobile {
      display: none;

      @media ${(props) => props.theme.mobile} {
        display: block;
      }
    }

    &.red {
      .currentMonthDate,
      .currentMonthDay {
        color: ${(props) => props.theme.red};
      }
    }

    &.blue {
      .currentMonthDate,
      .currentMonthDay {
        color: ${(props) => props.theme.blue};
      }
    }

    &.active {
      color: ${(props) => props.theme.white};
      background-color: ${(props) => props.theme.active};
    }

    &.other {
      color: ${(props) => props.theme.gray};

      &.active {
        background-color: ${(props) => props.theme.active};
      }

      @media ${(props) => props.theme.mobile} {
        display: none;
      }
    }

    .calendarAmountBox {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      padding-left: 4px;
      font-size: 13px;

      .blue,
      .red {
        word-break: break-word;
      }

      .blue {
        color: ${(props) => props.theme.blue};
      }

      .red {
        position: relative;
        left: 2px;
        color: ${(props) => props.theme.red};
      }

      @media ${(props) => props.theme.mobile} {
        flex-direction: row;
        column-gap: 12px;
        width: 100%;
      }
    }

    @media ${(props) => props.theme.desktop} {
      cursor: pointer;

      &:hover {
        background-color: ${(props) => props.theme.hover};
      }
    }

    @media ${(props) => props.theme.mobile} {
      display: flex;
      align-items: center;
    }
  }

  @media ${(props) => props.theme.mobile} {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: ${(props) => (props.isOpenMobileCalendar ? 'flex' : 'none')};
    flex-direction: column;
    height: ${(props) => (props.isOpenMobileCalendar ? '260px' : '65px')};
    border-bottom: 1px solid ${(props) => props.theme.border};
    overflow-y: ${(props) =>
      props.isOpenMobileCalendar ? 'scroll' : 'hidden'};
    z-index: 80;

    .date {
      padding: 24px 0 24px 12px;
      border-left: 1px solid ${(props) => props.theme.border};
    }
  }
`;
