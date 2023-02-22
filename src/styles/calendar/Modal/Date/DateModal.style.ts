import styled from 'styled-components';

export const CalendarDateModalContainer = styled.div<{
  isOpenCalendar: boolean;
}>`
  position: absolute;
  top: 100%;
  left: 50%;
  display: ${(props) => (props.isOpenCalendar ? 'block' : 'none')};
  width: 100%;
  max-width: 480px;
  border: 1px solid ${(props) => props.theme.border};
  background-color: ${(props) => props.theme.white};
`;
