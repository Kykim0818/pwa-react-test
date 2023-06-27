import { useState } from "react";
import QrReader from "react-qr-reader";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const EnterGame = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState("No result");

  const handleError = (err: any) => {
    console.log(err);
  };

  const handleScan = (result: any) => {
    if (result) {
      setResult(result);
    }
  };

  const handleBtnClick = () => {
    navigate(-1);
  };

  return (
    <S.Wrapper>
      <S.Title>게임 참여하기</S.Title>
      <S.Camera>
        <QrReader
          className="qr__reader"
          delay={500}
          style={{
            height: 329,
            width: 272,
            borderRadius: "34px",
          }}
          onError={handleError}
          onScan={handleScan}
        />
        <S.Btn onClick={handleBtnClick}>X</S.Btn>
      </S.Camera>
      <S.Desc>
        게임방 QR 코드를 화면에 비추면 게임방으로 참여할 수 있습니다.
        {result}
      </S.Desc>
    </S.Wrapper>
  );
};

const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Title: styled.div`
    // typo
    color: #3b3f40;
    text-align: center;
    font-size: 15px;
    //
    margin-top: 7px;
  `,
  Camera: styled.div`
    width: 272px;
    height: 328.601px;
    border-radius: 34px;
    background: #f6f8fc;

    position: relative;
    //
    margin-top: 40px;

    .qr__reader {
      > section {
        width: 272px;
        height: 328.601px;
        border-radius: 34px;

        > div {
          height: 180px;
        }
      }
    }
  `,
  Btn: styled.div`
    width: 50px;
    height: 50px;
    position: absolute;
    bottom: -25px;
    left: calc(50% - 25px);
    background-color: var(--color-main);

    //
    &:hover {
      cursor: pointer;
    }
  `,

  Desc: styled.div`
    padding: 20px 40px;
    width: 280px;
    min-height: 85px;
    border-radius: 23px;
    background: #e6f7f9;
    //
    margin-top: 58.4px;
  `,
};
