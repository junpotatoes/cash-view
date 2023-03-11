import styled from 'styled-components';

export const ModalContainer = styled.div<{ modal: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  display: ${(props) => (props.modal ? 'block' : 'none')};
  width: 100%;
  max-width: 400px;
  padding: 24px 48px;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 4px;
  background-color: ${(props) => props.theme.white};
  transform: translate(-50%, -50%);
  transition: display 0.5s;
  z-index: 90;

  .editHistoryHeader {
    margin-bottom: 24px;

    .editCalendar {
      font-size: 16px;
      font-weight: 700;
    }
  }

  @media ${(props) => props.theme.mobile} {
    width: 80%;
  }
`;

export const ItemContainer = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  margin-top: 32px;
`;

export const ItemBox = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
  width: 100%;
  font-size: 13px;

  .itemTitle {
    width: 30%;
  }

  .itemContent {
    width: 70%;

    &.underline {
      padding: 4px;
      border: 1px solid ${(props) => props.theme.white};
      border-bottom: 1px solid ${(props) => props.theme.border};
      border-radius: 4px;
      transition: border 0.5s;

      &:focus {
        border: 1px solid ${(props) => props.theme.active};
      }
    }
  }

  .category {
    width: 100%;
    padding: 4px;
    outline: none;
    border: 1px solid ${(props) => props.theme.border};
    border-radius: 4px;
    font-size: 12px;

    &:focus {
      border: 1px solid ${(props) => props.theme.active};
    }
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .option {
    display: flex;
    column-gap: 12px;

    button {
      padding: 8px;
      color: ${(props) => props.theme.white};
      border: 1px solid ${(props) => props.theme.border};
      border-radius: 4px;
    }

    .blue {
      background-color: ${(props) => props.theme.blue};
    }

    .red {
      background-color: ${(props) => props.theme.red};
    }
  }
`;
