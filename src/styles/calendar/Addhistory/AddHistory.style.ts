import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 80;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100%;
  max-width: 500px;
  height: 400px;
  padding: 24px;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 4px;
  background-color: ${(props) => props.theme.white};
  transform: translate(-50%, -50%);
  z-index: 90;
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
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .option {
    display: flex;
    justify-content: space-around;
    width: 45%;
    height: 40px;
    font-size: 30px;
    margin-top: 30px;

    .save__Modal {
      width: 65px;
      height: 45px;
      background-color: ${(props) => props.theme.gray};
      border: 1px solid ${(props) => props.theme.black};
      border-radius: 5px;
    }

    .close__Modal {
      width: 65px;
      height: 45px;
      background-color: ${(props) => props.theme.gray};
      border: 1px solid ${(props) => props.theme.black};
      border-radius: 5px;
    }
  }
`;
