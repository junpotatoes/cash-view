import styled from 'styled-components';

export const CalendarHistoryContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  .addHistoryButton {
    position: absolute;
    top: 2px;
    right: 8px;
    font-size: 20px;

    @media ${(props) => props.theme.desktop} {
      transition: color 0.3s;

      &:hover {
        color: ${(props) => props.theme.hover};
      }
    }
  }
`;
