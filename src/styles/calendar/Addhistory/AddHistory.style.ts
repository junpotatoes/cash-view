import styled from 'styled-components';

export const ModalWrapper = styled.div<{ modal: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  display: ${(props) => (props.modal ? 'block' : 'none')};
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 80;
`;

export const ModalContainer = styled.div<{ modal: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  display: ${(props) => (props.modal ? 'block' : 'none')};
  width: 100%;
  max-width: 400px;
  height: 400px;
  padding: 24px;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 4px;
  background-color: ${(props) => props.theme.white};
  transform: translate(-50%, -50%);
  transition: display 0.5s;
  z-index: 90;

  @media ${(props) => props.theme.mobile} {
    width: 80%;
  }
`;

export const ItemWrapper = styled.div`
  height: 180px;
`;

export const ItemContainer = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  line-height: 60px;
  padding-left: 10px;
  font-size: 17px;
`;

export const ItemBox = styled.div`
  width: 100%;
  height: 35px;

  span {
    margin-right: 10px;
  }

  .select_class {
    margin-left: 29px;
  }

  .underline {
    width: 60%;
    height: 20px;
    margin-left: 29px;
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.black};
  }
  .category {
    width: 60%;
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
    width: 45%;
    height: 40px;
    font-size: 30px;
    margin-top: 30px;

    button {
      padding: 12px;
      background-color: ${(props) => props.theme.gray};
      border: 1px solid ${(props) => props.theme.black};
      border-radius: 4px;
    }
  }
`;
