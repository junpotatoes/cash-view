import styled from 'styled-components';

export const CalendarModalButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 24px;
    height: 24px;
    transition: fill 0.3s;
  }

  @media ${(props) => props.theme.desktop} {
    &:hover {
      fill: ${(props) => props.theme.hover};
    }
  }
`;
