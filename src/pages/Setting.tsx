import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const SettingWrapper = styled.div`
  width: 80%;
  /* display: flex;
  justify-content: center; */

  .upload-area {
    position: relative;
    width: 260px;
    height: 260px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .upload-area img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  label {
    font-size: 16px;
    color: ${(props) => props.theme.blue};
    display: flex;
    justify-content: center;
    cursor: pointer;
  }

  .upload-area p {
    display: none;
  }

  .upload-area img + p {
    display: block;
  }
  input {
    display: flex;
  }
`;

const UserInfoTitle = styled.div`
  width: 115%;
  margin-top: 40px;
  font-size: 22px;

  .underline {
    width: 80%;

    border-bottom: 1px solid black;
  }

  p {
    margin-bottom: 5px;
  }
`;

const ImgBox = styled.div``;

const UserInfoContainer = styled.div`
  display: flex;
`;

const UserInfoBox = styled.div`
  line-height: 20px;
  color: ${(props) => props.theme.black};
  margin-left: 20px;
  padding: 20px;
  div {
    font-size: 20px;
    margin-top: 10px;
  }
`;

const ActiveBox = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: center;

  button {
    margin-left: 10px;
    font-size: 14px;
    color: ${(props) => props.theme.active};
  }
`;

interface User {
  userId: number;
  userName: string;
}

function Setting() {
  const [imgFile, setImgFile] = useState<string>('');
  const [file, setFile] = useState('');
  const [isSaved, setIsSaved] = useState(false);
  const [userInfo, setUserInfo] = useState<any>('');

  const imgRef = useRef<HTMLInputElement>(null);

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
  const userName = user?.userName;
  const userId = user?.userId;

  useEffect(() => {
    axios
      .get(`http://localhost:4000/users/${userId}`)
      .then((res) => {
        setImgFile(res.data.img);
        console.log(res);
        setUserInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmitBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const body = {
      img: imgFile
    };

    axios
      .patch(`http://localhost:4000/users/${userId}`, body, {})
      .then((res) => {
        console.log(res);
        setIsSaved(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <SettingWrapper>
      <UserInfoTitle>
        <p>계정 정보</p>
        <div className="underline"></div>
      </UserInfoTitle>
      <UserInfoContainer>
        <ImgBox>
          <div className="upload-area">
            <img src={imgFile} alt="uploaded" />
            <input
              id="file-input"
              type="file"
              name="file"
              ref={imgRef}
              onChange={saveImgFile}
              style={{ display: 'none' }}
              onClick={() => setIsSaved(true)}
            />
            {imgFile && <p>이미지가 업로드되었습니다.</p>}
          </div>
          <ActiveBox>
            <label htmlFor="file-input">프로필 이미지 수정</label>
            {isSaved && (
              <button type="button" onClick={handleSubmitBtn}>
                저장
              </button>
            )}
          </ActiveBox>
        </ImgBox>

        <UserInfoBox>
          <div>{userInfo.name}</div>
          <div>{userInfo.email}</div>
        </UserInfoBox>
      </UserInfoContainer>
    </SettingWrapper>
  );
}

export default Setting;
