import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { baseAPI } from '@/api/customAxios';
import * as S from '@/styles/Sign/Login.style';

interface LoginFormValues {
  email: string;
  password: string;
}

function LoginForm() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState<LoginFormValues>({
    email: '',
    password: ''
  });
  const [toggle, setToggle] = useState(1);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    baseAPI
      .post('/login', formValues)
      .then((res) => {
        const { data } = res;

        localStorage.user = JSON.stringify({
          userId: data.user.id,
          userName: data.user.name
        });

        localStorage.calendar = JSON.stringify({
          year: new Date().getFullYear(),
          month: new Date().getMonth() + 1,
          date: new Date().getDate()
        });

        navigate('/calendar');
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
