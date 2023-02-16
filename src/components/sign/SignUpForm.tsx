import axios from 'axios';
import { useState } from 'react';
import {
  SignUpWrapper,
  SignUpFormContent,
  SignUpInput,
  SignUpButton
} from '../../styles/sign/signup';

interface SignUpFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

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

    axios
      .post('http://localhost:4000/register', formValues)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
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
            placeholder={'이름을 입력해주세요'}
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
            placeholder={'이메일을 입력해주세요'}
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
            placeholder={'비밀번호를 입력해주세요'}
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
            placeholder={'비밀번호를 확인해주세요'}
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
