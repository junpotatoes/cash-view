import axios from 'axios';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import * as S from '../../styles/Sign/Login.style';

interface LoginFormValues {
  email: string;
  password: string;
}

function LoginForm() {
  const [formValues, setFormValues] = useState<LoginFormValues>({
    email: '',
    password: ''
  });
  const [toggle, setToggle] = useState(1);
  const [cookies, setCookie, removeCookie] = useCookies();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .post('http://localhost:4000/login', formValues)
      .then((res) => {
        const { data } = res;
        console.log(res);
        setCookie('accessToken', data['accessToken'], { path: '/' });
        localStorage.setItem('accessToken', data['accessToken']); // set localStorage
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
    <section className="contentTabs">
      <div className={toggle === 1 ? 'activeContent' : 'content'}>
        <S.FormContent onSubmit={handleSubmit}>
          <S.SignInput
            type="email"
            name="email"
            value={formValues.email}
            placeholder={'이메일을 입력해주세요'}
            onChange={handleInputChange}
          />

          <S.SignInput
            type="password"
            name="password"
            value={formValues.password}
            placeholder={'비밀번호를 입력해주세요'}
            onChange={handleInputChange}
          />
          <S.LoginButton type="submit">로그인</S.LoginButton>
        </S.FormContent>
      </div>
    </section>
  );
}

export default LoginForm;
