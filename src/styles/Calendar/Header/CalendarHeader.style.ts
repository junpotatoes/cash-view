import styled from 'styled-components';

export const CalendarHeaderContainer = styled.header<{ px: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 12px;
  width: 100%;
  padding: ${(props) => props.px}px 0;

  .calendarDateBox {
    position: relative;
    display: flex;
    align-items: center;
    column-gap: 8px;

    strong {
      flex-shrink: 0;
      font-size: ${(props) => props.px}px;
      font-weight: 700;
    }
  }
`;

export const NextButton = styled.button<{ px: number }>`
  display: flex;
  align-items: center;

  svg {
    width: ${(props) => props.px}px;
    height: ${(props) => props.px}px;
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
