import styled from "styled-components";
import Button from "../../components/Button";

export const Home = () => {
  return (
    <Styled.Wrapper>
      <Styled.S1>
        <Styled.C1 />
        <div>안녕하세요</div>
        <Styled.S1_ID>
          <div>드림코코넛님</div>
          <Button>{`>`}</Button>
        </Styled.S1_ID>
      </Styled.S1>
      <Styled.S2>
        <Styled.S2Info1>
          <div>98</div>
          <div>필드</div>
        </Styled.S2Info1>
        <Styled.S2Info1>
          <div>98</div>
          <div>스크린</div>
        </Styled.S2Info1>
        <Styled.S2Info1>
          <div>10,000원</div>
          <div>누적 내기 금액</div>
        </Styled.S2Info1>
      </Styled.S2>
      <Styled.S3>
        <Styled.S3Btn>게임 생성하기</Styled.S3Btn>
        <Styled.S3Btn>게임 참여하기</Styled.S3Btn>
      </Styled.S3>
      <Styled.Footer>
        <Styled.FooterC1>Home</Styled.FooterC1>
        <Styled.FooterB>left</Styled.FooterB>
        <Styled.FooterB>right</Styled.FooterB>
      </Styled.Footer>
    </Styled.Wrapper>
  );
};

const Styled = {
  Wrapper: styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    align-items: center;
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
