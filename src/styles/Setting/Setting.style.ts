import styled from 'styled-components';

export const SettingWrapper = styled.div`
  width: 80%;

  .upload-area {
    position: relative;
    max-width: 260px;
    max-height: 260px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .upload-area img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  label {
    font-size: 16px;
    color: ${(props) => props.theme.blue};
    display: flex;
    justify-content: center;
    cursor: pointer;
  }

  .upload-area p {
    display: none;
  }

  .upload-area img + p {
    display: block;
  }
  input {
    display: flex;
  }
`;

export const UserInfoTitle = styled.div`
  width: 115%;
  margin-top: 40px;
  font-size: 22px;

  .underline {
    width: 87%;
    padding-bottom: 4px;
    border-bottom: 1px solid ${(props) => props.theme.border};
  }

  p {
    margin-bottom: 5px;
  }
`;

export const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
`;

export const UserInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  color: ${(props) => props.theme.black};
  margin-left: 20px;
  height: 70%;

  div {
    font-size: 20px;
  }

  .userBox {
    display: flex;
    margin-bottom: 10px;
  }

  .logoutBtn {
    font-size: 16px;
    margin-left: 20px;
    color: ${(props) => props.theme.blue};
  }
`;

export const ActiveBox = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: center;

  button {
    margin-left: 10px;
    font-size: 14px;
    color: ${(props) => props.theme.active};
  }
`;
