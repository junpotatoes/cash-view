import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.border};
  background-color: ${(props) => props.theme.white};
  z-index: 90;
`;

export const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  height: 50px;

  .HeaderTitle {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 4px;
    width: 10%;
    color: ${(props) => props.theme.active};

    .userImg {
      width: 24px;
      height: 24px;
      border-radius: 50px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
      }
    }

    strong {
      font-size: 16px;
      font-weight: 700;
    }

    @media ${(props) => props.theme.mobile} {
      position: absolute;
      left: 50%;
      width: 100%;
      max-width: 120px;
      color: ${(props) => props.theme.white};
      transform: translateX(-50%);
    }
  }

  .HeaderMenuList {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 48px;
    width: 80%;
    height: 100%;
    padding: 0 160px;
    background-color: ${(props) => props.theme.main};

    @media ${(props) => props.theme.mobile} {
      width: 100%;
    }

    li {
      flex-shrink: 0;
      height: 100%;

      @media ${(props) => props.theme.mobile} {
        display: none;
      }

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 120px;
        height: 100%;
        color: ${(props) => props.theme.white};
        background-color: ${(props) => props.theme.main};

        @media ${(props) => props.theme.desktop} {
          transition: background-color 0.5s;

          &:hover {
            background-color: ${(props) => props.theme.hover};
          }
        }
      }

      .isActive {
        background-color: ${(props) => props.theme.active};
      }
    }
  }
`;

export const HeaderMobileMenu = styled.button`
  display: none;

  @media ${(props) => props.theme.mobile} {
    position: absolute;
    left: 12px;
    display: block;

    svg {
      width: 18px;
      fill: ${(props) => props.theme.white};
    }
  }
`;

export const MenuModalWrapper = styled.div<{ isOpenModal: boolean }>`
  display: none;

  @media ${(props) => props.theme.mobile} {
    position: fixed;
    top: 50px;
    left: 0;
    display: ${(props) => (props.isOpenModal ? 'block' : 'none')};
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 70;
  }
`;

export const MenuModalContainer = styled.div<{ isOpenModal: boolean }>`
  display: none;

  @media ${(props) => props.theme.mobile} {
    position: fixed;
    top: 50px;
    left: 0;
    display: block;
    width: 200px;
    height: 200px;
    background-color: ${(props) => props.theme.white};
    transition: transform 0.5s;
    transform: ${(props) =>
      props.isOpenModal ? 'translateY(0)' : 'translateY(-200px)'};
    z-index: 80;

    .MobileMenuList {
      height: 100%;

      li {
        height: calc(100% / 3);
        &:not(:last-child) {
          border-bottom: 1px solid ${(props) => props.theme.border};
        }

        a {
          display: flex;
          justify-items: center;
          align-items: center;
          height: 100%;
          padding-left: 12px;
          color: ${(props) => props.theme.main};
        }

        .isActive {
          color: ${(props) => props.theme.white};
          background-color: ${(props) => props.theme.active};
        }
      }
    }
  }
`;
