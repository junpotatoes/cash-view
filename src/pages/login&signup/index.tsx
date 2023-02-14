import { useState } from 'react';
import styled from 'styled-components';
import LoginForm from '../../components/LoginForm';
import SignUpForm from '../../components/SignUpForm';
import {
  LoginWrapper,
  LoginContainer,
  LoginTitle,
  Underline
} from '../../styles/login';

function Login() {
  const [toggle, setToggle] = useState(1);

  return (
    <LoginWrapper>
      <LoginTitle>환영합니다</LoginTitle>
      <LoginContainer>
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
            <LoginForm></LoginForm>
          </div>
          <div className={toggle === 2 ? 'activeContent' : 'content'}>
            <SignUpForm></SignUpForm>
          </div>
        </section>
      </LoginContainer>
    </LoginWrapper>
  );
}

export default Login;
