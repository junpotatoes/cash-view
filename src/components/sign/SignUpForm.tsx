import axios from 'axios';
import { useState } from 'react';
import * as S from '../../styles/Sign/Signup.style';
import { SignInput } from '../../styles/Sign/Login.style';

interface Props {
  toggle: number;
  setToggle: React.Dispatch<React.SetStateAction<number>>;
}

interface SignUpFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

function SignUpForm({ toggle, setToggle }: Props) {
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
      .post('http://localhost:4000/register', {
        email: formValues.email,
        password: formValues.password,
        name: formValues.name,
        img: 'https://www.pngarts.com/files/10/Default-Profile-Picture-Download-PNG-Image.png'
      })
      .then((res) => {
        window.alert('회원가입 완료!');
        setToggle(1);
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
    <S.SignUpWrapper>
      <S.SignUpFormContent onSubmit={handleSubmit}>
        <div className="input_box">
          <label>이름</label>
          <SignInput
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleInputChange}
            placeholder={'이름을 입력해주세요'}
          />
        </div>

        <div className="error_box">
          {formValues.name.length > 0 && !nameCheck.test(formValues.name) ? (
            <div className="error_text">
              올바르지 않은 이름입니다. (공백,특수문자,숫자는 사용불가합니다.)
            </div>
          ) : null}
        </div>

        <div className="input_box">
          <label>이메일</label>
          <SignInput
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleInputChange}
            placeholder={'이메일을 입력해주세요'}
          />
        </div>
        <div className="error_box">
          {formValues.email.length > 0 && !emailCheck.test(formValues.email) ? (
            <div className="error_text">
              공백, 특수문자(!@#$%^&*-_)는 사용불가합니다.
            </div>
          ) : null}
        </div>

        <div className="input_box">
          <label>비밀번호</label>
          <SignInput
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
          <SignInput
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

        <S.SignUpButton type="submit">회원가입</S.SignUpButton>
      </S.SignUpFormContent>
    </S.SignUpWrapper>
  );
}

export default SignUpForm;
