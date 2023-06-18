import { Suspense, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";
import { User, getUser } from "../../service/api/user";
import React from "react";

export const Home = () => {
  const navigate = useNavigate();

  /**
   * TODO
   * - 진입과 동시에 로그인된 유저의 정보를 가져온다. feat axios
   * - 가져와서 해당정보로 화면에 그려주기
   */
  const userId = localStorage.getItem("id");
  // exception
  if (userId === null) {
    navigate("/login");
  }

  return (
    <Styled.Wrapper>
      <Styled.Top>GOLF BET</Styled.Top>
      <Suspense fallback={<p>Loading...</p>}>
        <UserInfoSection userRes={getUser(userId!)} />
        <Styled.S3>
          <Styled.S3Btn>게임 생성하기</Styled.S3Btn>
          <Styled.S3Btn onClick={() => navigate("/enter_game")}>
            게임 참여하기
          </Styled.S3Btn>
        </Styled.S3>
      </Suspense>
      <Styled.Footer>
        <Styled.FooterC1>Home</Styled.FooterC1>
        <Styled.FooterB>left</Styled.FooterB>
        <Styled.FooterB>right</Styled.FooterB>
      </Styled.Footer>
    </Styled.Wrapper>
  );
};

const UserInfoSection = ({ userRes }: { userRes: any }) => {
  const user: User = userRes?.read();
  return (
    <React.Fragment>
      <Styled.S1>
        <img src={user.imgSrc} alt="no images" />
        <Styled.S1_ID>
          <div>{user.id} 님</div>
        </Styled.S1_ID>
      </Styled.S1>
      <Styled.S2>
        <Styled.S2Info1>
          <div>{user.fieldGameCount}</div>
          <div>필드</div>
        </Styled.S2Info1>
        <Styled.S2Info1>
          <div>{user.screenGameCount}</div>
          <div>스크린</div>
        </Styled.S2Info1>
        <Styled.S2Info1>
          <div>{user.moneySum}원</div>
          <div>누적 내기 금액</div>
        </Styled.S2Info1>
      </Styled.S2>
    </React.Fragment>
  );
};

const Styled = {
  Wrapper: styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
  `,
  Top: styled.div`
    display: flex;

    // TODO: typo 대체
    font-size: 25px;
    font-weight: 700;
    line-height: 34.05px;
    color: var(--color-main-dark, #006977);
  `,
  S1: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
    margin-top: 62px;
    margin-bottom: 31px;
  `,

  S1_ID: styled.div`
    display: flex;
  `,

  C1: styled.div`
    width: 85px;
    height: 85px;
    border-radius: 50%;
    background-color: #ffc0c0;
  `,

  S2: styled.div`
    display: flex;
    gap: 14px;
  `,

  S2Info1: styled.div`
    display: flex;
    width: 75px;
    height: 101px;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
    background-color: #f3f3f380;
    border-radius: 23px;
  `,

  S3: styled.div`
    display: flex;
    gap: 22px;
    margin-top: 55px;
  `,
  S3Btn: styled.div`
    width: 155px;
    height: 233px;
    border-radius: 15px;
    background-color: #ffe4c7;
  `,

  Footer: styled.div`
    display: flex;
    justify-content: end;
    width: 100%;
    height: 73px;

    position: fixed;
    bottom: 0;

    background-color: #f5f9fa;
    border-radius: 46px 46px 0px 0px;
  `,
  FooterC1: styled.div`
    position: absolute;

    left: calc(50% - 38px);
    top: -38px;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 76px;
    height: 76px;
    border-radius: 50%;
    background-color: #1dbd93;
  `,
  FooterB: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
  `,
};
