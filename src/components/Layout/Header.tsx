import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as S from '../../styles/layout/Header.style';
import { ReactComponent as MenuIcon } from '../../assets/Icon/menuIcon.svg';

function Header() {
  const path = useLocation().pathname;
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <>
      <S.HeaderWrapper>
        <S.HeaderContainer>
          <h1 className="HeaderTitle">
            <strong>사용자의</strong>
            <span>가계부</span>
          </h1>

          <ul className="HeaderMenuList">
            <li>
              <Link
                to={'/calendar'}
                className={path === '/calendar' ? 'isActive' : ''}
              >
                캘린더
              </Link>
            </li>
            <li>
              <Link
                to={'/statistics'}
                className={path === '/statistics' ? 'isActive' : ''}
              >
                월별 통계
              </Link>
            </li>
            <li>
              <Link
                to={'/setting'}
                className={path === '/setting' ? 'isActive' : ''}
              >
                설정
              </Link>
            </li>
          </ul>

          <S.HeaderMobileMenu onClick={() => setIsOpenMenu(!isOpenMenu)}>
            <MenuIcon />
          </S.HeaderMobileMenu>
        </S.HeaderContainer>
      </S.HeaderWrapper>

      <S.MenuModalWrapper
        onClick={() => setIsOpenMenu(false)}
        isOpenModal={isOpenMenu}
      />
      <S.MenuModalContainer isOpenModal={isOpenMenu}>
        <ul className="MobileMenuList">
          <li>
            <Link
              to={'/calendar'}
              className={path === '/calendar' ? 'isActive' : ''}
              onClick={() => setIsOpenMenu(false)}
            >
              캘린더
            </Link>
          </li>
          <li>
            <Link
              to={'/statistics'}
              className={path === '/statistics' ? 'isActive' : ''}
              onClick={() => setIsOpenMenu(false)}
            >
              월별 통계
            </Link>
          </li>
          <li>
            <Link
              to={'/setting'}
              className={path === '/setting' ? 'isActive' : ''}
              onClick={() => setIsOpenMenu(false)}
            >
              설정
            </Link>
          </li>
        </ul>
      </S.MenuModalContainer>
    </>
  );
}

export default Header;
