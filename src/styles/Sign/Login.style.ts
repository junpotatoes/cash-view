import styled from 'styled-components';

export const LoginWrapper = styled.div<{ tab: number }>`
  position: relative;
  top: ${(props) => (props.tab === 1 ? '50%' : '30%')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${(props) => props.theme.white};

  .tabsActive {
    border-bottom: 1px solid transparent;
    color: ${(props) => props.theme.active};
  }

  .tabsActive::before {
    position: absolute;
    top: -5px;
    left: 50%;
    display: block;
    width: calc(100% + 2px);
    height: 5px;
    transform: translateX(-50%);
    content: '';
  }
  .tabs {
    position: relative;
    text-align: center;
    box-sizing: content-box;
    cursor: pointer;
    outline: none;
    transition: color 0.3s;

    @media ${(props) => props.theme.desktop} {
      &:hover {
        color: ${(props) => props.theme.hover};
      }
    }
  }

  .content {
    display: none;
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.white};
    padding: 20px;
  }

  .activeContent {
    display: block;
  }
`;

export const LoginContainer = styled.div`
  max-width: 360px;
  width: 100%;
`;

export const LoginTitle = styled.h2`
  justify-content: center;
  font-size: 24px;
  margin-bottom: 3rem;
`;

export const Underline = styled.div`
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.border};
  margin-bottom: 10px;

  button {
    font-size: 20px;
    margin-right: 10px;
  }
`;

export const FormContent = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
`;

export const SignInput = styled.input`
  width: 100%;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 5px;
  margin: 0.5rem 0;
  padding: 0.5rem;
  transition: border 0.5s;

  &:focus {
    border: 1px solid ${(props) => props.theme.active};
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  margin: 1rem 0;
  padding: 0.5rem 1rem;
  background-color: ${(props) => props.theme.main};
  color: ${(props) => props.theme.white};
  cursor: pointer;
  transition: background-color 0.5s;

  @media ${(props) => props.theme.desktop} {
    &:hover {
      background-color: ${(props) => props.theme.hover};
    }
  }
`;
