import styled from "styled-components";

function App() {
  return (
    <Styled.Wrapper>
      <p>Test Test</p>
      {/* <Button>
        <Link to={`home`}>Home - Profile</Link>
      </Button>
      <Button>
        <Link to={`login`}>Login</Link>
      </Button> */}
    </Styled.Wrapper>
  );
}

export default App;

const Styled = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
  `,
};
