import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./components/Button";

function App() {
  return (
    <Styled.Wrapper>
      <Button>
        <Link to={`home`}>Home - Profile</Link>
      </Button>
      <Button>
        <Link to={`login`}>Login</Link>
      </Button>
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
