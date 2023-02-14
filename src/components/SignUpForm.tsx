import { useState } from 'react';
import styled from 'styled-components';

interface SignUpFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

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
  width: 500px;
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
  }

  .error_box {
    display: flex;
    align-item: center;
    width: 52%;
  }

  .error_text {
    color: red;
    font-size: 8px;
    margin-top: -15px;
  }
`;

const SignUpInput = styled.input`
  margin: 0.5rem 0;
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.black};
  width: 100%;
`;

const SignUpButton = styled.button`
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

function SignUpForm() {
  const emailCheck =
    /^^[A-Za-z0-9]+@[A-Za-z]+\.?[A-Za-z]{2,3}\.[A-Za-z]{2,3}$$/;
  const nameCheck = /^[ㄱ-ㅎ|가-힣|A-Za-z]+\s*[ㄱ-ㅎ|가-힣|A-Za-z]+$/g;
  const regexp =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&])[A-Za-z\d!@#$%^&*]{8,20}$/;

  const [formValues, setFormValues] = useState<SignUpFormValues>({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formValues);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  return (
    <SignUpWrapper>
      <SignUpFormContent onSubmit={handleSubmit}>
        <div className="input_box">
          <label>이름</label>
          <SignUpInput
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="error_box">
          {formValues.name.length < 6 && 0 < formValues.name.length ? (
            <div className="error_text">
              6자 이상 16자 이하의 글자 수를 입력해주세요{' '}
            </div>
          ) : null}
        </div>

        <div className="input_box">
          <label>이메일</label>
          <SignUpInput
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="error_box">
          {formValues.email &&
          formValues.email.length > 0 &&
          !emailCheck.test(formValues.email) ? (
            <div className="error_text">
              공백, 특수문자(!@#$%^&*-_)는 사용불가합니다.
            </div>
          ) : null}
        </div>

        <div className="input_box">
          <label>비밀번호</label>
          <SignUpInput
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="error_box">
          {formValues.password && !regexp.test(formValues.password) ? (
            <div className="error_text">
              숫자, 알파벳, 특수문자(!@#$%^&*) 포함 8자 이상 20자 이하로
              입력해주세요
            </div>
          ) : null}
        </div>

        <div className="input_box">
          <label>비밀번호 확인</label>
          <SignUpInput
            type="password"
            name="confirmPassword"
            value={formValues.confirmPassword}
            onChange={handleInputChange}
          />
        </div>
        <div className="error_box">
          {formValues.confirmPassword &&
          formValues.password !== formValues.confirmPassword ? (
            <div className="error_text">비밀번호가 일치하지 않습니다</div>
          ) : null}
        </div>

        <SignUpButton type="submit">회원가입</SignUpButton>
      </SignUpFormContent>
    </SignUpWrapper>
  );
}

export default SignUpForm;
