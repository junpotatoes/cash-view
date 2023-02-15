import styled from 'styled-components';

const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SignUpHeading = styled.h2`
  margin-bottom: 1rem;
`;

const SignUpFormContent = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 450px;
  border-radius: 5px;
  padding: 1rem;

  .input_box {
    display: flex;
    width: 100%;
    margin-bottom: 15px;
  }

  label {
    width: 30%;
    margin: 0.5rem 0;
    padding: 0.5rem;
    font-size: 14px;
  }

  .error_box {
    display: flex;
    align-items: center;
    width: 52%;
  }

  .error_text {
    color: red;
    font-size: 8px;
    margin-top: -15px;
  }
`;

const SignUpInput = styled.input`
  width: 100%;
  margin: 0.5rem 0;
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.border};
  transition: border 0.5s;

  &:focus {
    border: 1px solid ${(props) => props.theme.active};
  }
`;

const SignUpButton = styled.button`
  width: 100%;
  margin: 1rem 0;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: none;
  background-color: ${(props) => props.theme.main};
  color: ${(props) => props.theme.white};
  font-size: 1rem;
  cursor: pointer;

  @media ${(props) => props.theme.desktop} {
    transition: background-color 0.5s;

    &:hover {
      background-color: ${(props) => props.theme.hover};
    }
  }
`;

export {
  SignUpWrapper,
  SignUpHeading,
  SignUpFormContent,
  SignUpInput,
  SignUpButton
};
