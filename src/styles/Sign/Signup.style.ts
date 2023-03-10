import styled from 'styled-components';

export const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SignUpHeading = styled.h2`
  margin-bottom: 1rem;
`;

export const SignUpFormContent = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-radius: 5px;

  .input_box {
    display: flex;
    width: 100%;
    margin-bottom: 15px;
    font-size: 9px;
  }

  label {
    width: 30%;
    margin: 0.5rem 0;
    padding: 0.5rem;
    font-size: 12px;
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

export const SignUpButton = styled.button`
  width: 100%;
  margin-top: 9px;
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
