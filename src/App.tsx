import styled from "styled-components";
import Header from "./components/Header";
import LaunchManagement from "./page/Launches/LaunchManagement";

function App() {
  return (
    <Container>
      <Header />
      <LaunchManagement />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
`;

export default App;
