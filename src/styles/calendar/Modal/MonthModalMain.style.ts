import styled from 'styled-components';

export const MonthModalMainContainer = styled.ol`
  display: grid;
  grid-template-columns: repeat(4, 40px);
  grid-auto-rows: minmax(40px, auto);
  gap: 4px;

  .month {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${(props) => props.theme.border};
    border-radius: 4px;

    @media ${(props) => props.theme.desktop} {
      cursor: pointer;

      &:hover {
        background-color: ${(props) => props.theme.hover};
      }
    }
  }
`;
