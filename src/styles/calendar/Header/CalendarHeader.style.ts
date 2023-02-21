import styled from 'styled-components';

export const CalendarHeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 12px;
  width: 100%;
  padding: 24px 0;

  .calendarDateBox {
    position: relative;
    display: flex;
    align-items: center;
    column-gap: 8px;

    strong {
      font-size: 24px;
      font-weight: 700;
    }
  }
`;

export const NextButton = styled.button`
  display: flex;
  align-items: center;

  svg {
    width: 24px;
    height: 24px;
    fill: ${(props) => props.theme.gray};
    transition: fill 0.3s;
  }

  @media ${(props) => props.theme.desktop} {
    &:hover {
      svg {
        fill: ${(props) => props.theme.hover};
      }
    }
  }
`;

export const PrevButton = styled(NextButton)`
  svg {
    transform: rotate(180deg);
  }
`;
