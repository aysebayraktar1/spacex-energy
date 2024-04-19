import styled from "styled-components";
import LaunchList from "./page/Launches/LaunchList";

function App() {
  return (
    <Container>
      <h1>SpaceX Launches</h1>
      <LaunchList />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: #1a1a1a;
  background: radial-gradient(at center, #1a1a1a, #010101);
`;

export default App;
