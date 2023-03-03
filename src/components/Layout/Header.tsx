import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as S from '../../styles/Layout/Header.style';
import { ReactComponent as MenuIcon } from '../../assets/Icon/menuIcon.svg';
import { baseAPI } from '../../api/customAxios';

function Header() {
  const path = useLocation().pathname;
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [userImg, setUserImg] = useState('');
  const userId = JSON.parse(localStorage.user).userId;

  const getUserImg = async () => {
    try {
      const res = await baseAPI.get(`/users/${userId}`);
      setUserImg(res.data.img);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserImg();
  }, []);

  return (
    <>
      <S.HeaderWrapper>
        <S.HeaderContainer>
          <h1 className="HeaderTitle">
            <div className="userImg">
              <img src={userImg} alt="" />
            </div>
            <strong>
              {localStorage.user ? JSON.parse(localStorage.user).userName : ''}
            </strong>
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
