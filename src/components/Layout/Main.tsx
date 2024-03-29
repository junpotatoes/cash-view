import * as S from '@/styles/Layout/Main.style';
import Router from '@/components/Layout/Route';

function Main() {
  return (
    <S.MainWrapper>
      <S.MainContainer>
        <Router />
      </S.MainContainer>
    </S.MainWrapper>
  );
}

export default Main;
