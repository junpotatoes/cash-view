import styled from 'styled-components';

export const CalendarMainWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const CalendarMainContainer = styled.div`
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.border};
  border-left: 1px solid ${(props) => props.theme.border};

  @media ${(props) => props.theme.mobile} {
    border: 1px solid ${(props) => props.theme.border};
  }
`;
