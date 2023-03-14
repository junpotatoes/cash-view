import { useState } from 'react';
import LoginForm from '@/components/Sign/LoginForm';
import SignUpForm from '@/components/Sign/SignUpForm';
import {
  LoginWrapper,
  LoginContainer,
  LoginTitle,
  Underline
} from '@/styles/Sign/Login.style';

function Sign() {
  const [toggle, setToggle] = useState(1);

  return (
    <LoginWrapper tab={toggle}>
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
            <LoginForm />
          </div>
          <div className={toggle === 2 ? 'activeContent' : 'content'}>
            <SignUpForm toggle={toggle} setToggle={setToggle} />
          </div>
        </section>
      </LoginContainer>
    </LoginWrapper>
  );
}

export default Sign;
