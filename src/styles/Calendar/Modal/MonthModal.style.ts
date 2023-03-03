import styled from 'styled-components';

export const MonthModalContainer = styled.div<{ isOpenCalendar: boolean }>`
  position: absolute;
  top: 120%;
  left: 50%;
  display: ${(props) => (props.isOpenCalendar ? 'block' : 'none')};
  padding: 0 12px 12px 12px;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 4px;
  background-color: ${(props) => props.theme.white};
  transform: translateX(-50%);
  z-index: 80;
`;
