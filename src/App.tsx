import { Link } from "react-router-dom";
import styled from "styled-components";

function App() {
  return (
    <Styled.Wrapper>
      <button>
        <Link to={`home`}>Home - Profile</Link>
      </button>
      <button>
        <Link to={`login`}>Login</Link>
      </button>
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
