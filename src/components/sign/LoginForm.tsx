import axios from 'axios';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { FormContent, LoginInput, LoginButton } from '../../styles/sign/login';

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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .post('http://localhost:4000/login', formValues)
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
    <section className="contentTabs">
      <div className={toggle === 1 ? 'activeContent' : 'content'}>
        <FormContent onSubmit={handleSubmit}>
          <LoginInput
            type="email"
            name="email"
            value={formValues.email}
            placeholder={'이메일을 입력해주세요'}
            onChange={handleInputChange}
          />

          <LoginInput
            type="password"
            name="password"
            value={formValues.password}
            placeholder={'비밀번호를 입력해주세요'}
            onChange={handleInputChange}
          />
          <LoginButton type="submit">로그인</LoginButton>
        </FormContent>
      </div>
    </section>
  );
}

export default LoginForm;
