import styled from 'styled-components';

export const AlertContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 24px;
  width: 300px;
  padding: 16px 16px 10px 16px;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 4px;
  background-color: ${(props) => props.theme.white};
  transform: translate(-50%, -50%);
  z-index: 90;

  .message {
    font-size: 16px;
  }

  .buttonBox {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 8px;
    width: 100%;

    .confirmButton {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
      height: 56px;
      border: 1px solid ${(props) => props.theme.border};
      border-radius: 4px;
      font-size: 15px;
      font-weight: 700;
      color: ${(props) => props.theme.white};

      @media ${(props) => props.theme.desktop} {
        transition: opacity 0.5s;

        &:hover {
          opacity: 0.5;
        }
      }

      &.blue {
        background-color: ${(props) => props.theme.blue};
      }

      &.red {
        background-color: ${(props) => props.theme.red};
      }
    }
  }
`;
