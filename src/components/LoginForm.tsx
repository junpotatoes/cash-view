import { useState } from 'react';
import styled from 'styled-components';

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.white};
  width: 100%;
  .tabsActive {
    background: white;
    border-bottom: 1px solid transparent;
    color: ${(props) => props.theme.red};
  }

  .tabsActive::before {
    content: '';
    display: block;
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% + 2px);
    height: 5px;
  }
  .tabs {
    text-align: center;

    cursor: pointer;
    box-sizing: content-box;
    position: relative;
    outline: none;
  }

  .content {
    background: white;
    padding: 20px;
    width: 100%;
    height: 100%;
    display: none;
  }

  .activeContent {
    display: block;
  }
`;

const LoginContainer = styled.div`
  & h2 {
    display: flex;
    font-size: 24px;
    margin-bottom: 80px;
  }
`;

const LoginTitle = styled.h2`
  margin-bottom: 1rem;
  font-size: 24px;
  justify-content: center;
`;

const Underline = styled.div`
  border-bottom: 1px solid gray;
  width: 100%;
  button {
    font-size: 20px;
    margin-right: 10px;
  }
`;
const FormContent = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  border-radius: 5px;
  padding: 1rem;
`;

const LoginInput = styled.input`
  margin: 0.5rem 0;
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 100%;
`;

const LoginButton = styled.button`
  margin: 1rem 0;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: none;
  background-color: ${(props) => props.theme.red};
  color: ${(props) => props.theme.white};
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
`;

function LoginForm() {
  const [formValues, setFormValues] = useState<LoginFormValues>({
    email: '',
    password: ''
  });
  const [toggle, setToggle] = useState(1);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  return (
    <LoginWrapper>
      <LoginContainer>
        <LoginTitle>가계부</LoginTitle>
        <Underline>
          <button
            className={toggle === 1 ? 'tabs tabsActive' : 'tabs'}
            onClick={() => setToggle(1)}
          >
            로그인
          </button>
          <button
            className={toggle === 2 ? 'tabs tabsActive' : 'tabs'}
            onClick={() => setToggle(2)}
          >
            회원가입
          </button>
        </Underline>
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
      </LoginContainer>
    </LoginWrapper>
  );
}

export default LoginForm;
