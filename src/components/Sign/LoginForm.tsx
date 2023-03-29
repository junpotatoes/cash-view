import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { baseAPI } from '@/api/customAxios';
import * as S from '@/styles/Sign/Login.style';
import Alert from '@/components/Alert/Alert';
import { useAppDispatch } from '@/hooks/store';
import { onToggle } from '@/store/historySlice';

interface LoginFormValues {
  email: string;
  password: string;
}

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [formValues, setFormValues] = useState<LoginFormValues>({
    email: '',
    password: ''
  });
  const [toggle, setToggle] = useState(1);
  const [alert, setAlert] = useState(false);

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
        window.location.reload();
      })
      .catch(() => {
        setAlert(true);
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
            placeholder={'user1234@gmail.com'}
            onChange={handleInputChange}
            required
          />

          <S.SignInput
            type="password"
            name="password"
            value={formValues.password}
            placeholder={'user1234@'}
            onChange={handleInputChange}
            required
          />
          <S.SignButton type="submit">로그인</S.SignButton>
        </S.FormContent>
        <Alert
          message="이메일 주소나 비밀번호가 틀립니다"
          trueText="확인"
          alertModal={alert}
          setAlertModal={setAlert}
        />
      </div>
    </section>
  );
}

export default LoginForm;
