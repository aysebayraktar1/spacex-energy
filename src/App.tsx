import styled from "styled-components";

function App() {
  return (
    <Container>
      <h1>SpaceX Launches</h1>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: #1a1a1a;
  background: radial-gradient(at center, #1a1a1a, #010101);
`;

export default App;
