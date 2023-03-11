import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from '@/styles/Setting/Setting.style';
import { baseAPI } from '@/api/customAxios';
import Alert from '@/components/Alert/Alert';

interface User {
  userId: number;
  userName: string;
}

function Setting() {
  const [imgFile, setImgFile] = useState<string>('');
  const [file, setFile] = useState('');
  const [isSaved, setIsSaved] = useState(false);
  const [userInfo, setUserInfo] = useState<any>('');
  const navigate = useNavigate();
  const imgRef = useRef<HTMLInputElement>(null);
  const [alert, setAlert] = useState(false);
  const [getImg, setGetImg] = useState(true);
  const [imgAlert, setImgAlert] = useState(false);

  const saveImgFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      const getFile: any = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(getFile);
      reader.onloadend = () => {
        setImgFile(reader.result as string);
        setFile(getFile);
      };
    }
  };

  const userJson = localStorage.getItem('user');
  const user: User | null = userJson ? JSON.parse(userJson) : null;
  const userId = user?.userId;

  useEffect(() => {
    getImg &&
      baseAPI
        .get(`/users/${userId}`)
        .then((res) => {
          setImgFile(res.data.img);
          setUserInfo(res.data);
          setGetImg(false);
        })
        .catch((err) => {
          console.log(err);
        });
  }, [getImg]);

  const handleSubmitBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const body = {
      img: imgFile
    };

    baseAPI
      .patch(`/users/${userId}`, body, {})
      .then((res) => {
        setIsSaved(false);
        setImgAlert(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogoutBtn = () => {
    window.localStorage.clear();
    navigate('/');
  };

  return (
    <S.SettingWrapper>
      <S.UserInfoTitle>
        <p>계정 정보</p>
        <div className="underline"></div>
      </S.UserInfoTitle>
      <S.UserInfoContainer>
        <div>
          <div className="upload-area">
            <img src={imgFile} alt="uploaded" />
            <input
              id="file-input"
              accept="image/jpg,impge/png,image/jpeg"
              type="file"
              name="file"
              ref={imgRef}
              onChange={saveImgFile}
              style={{ display: 'none' }}
              onClick={() => setIsSaved(true)}
            />
            {imgFile && <p>이미지가 업로드되었습니다.</p>}
          </div>
          <S.ActiveBox>
            <label htmlFor="file-input">프로필 이미지 수정</label>
            {isSaved && (
              <button type="button" onClick={handleSubmitBtn}>
                저장
              </button>
            )}
            <Alert
              message="프로필 이미지가 수정되었습니다."
              trueText="확인"
              alertModal={imgAlert}
              setAlertModal={setImgAlert}
            />
          </S.ActiveBox>
        </div>

        <S.UserInfoBox>
          <div className="userBox">
            <div>{userInfo.name}</div>
            <button className="logoutBtn" onClick={() => setAlert(true)}>
              로그아웃
            </button>

            <Alert
              message="로그아웃하시겠습니까?"
              trueText="네"
              falseText="아니오"
              alertModal={alert}
              setAlertModal={setAlert}
              propsFunction={handleLogoutBtn}
            />
          </div>
          <div>
            <div>{userInfo.email}</div>
          </div>
        </S.UserInfoBox>
      </S.UserInfoContainer>
    </S.SettingWrapper>
  );
}

export default Setting;
