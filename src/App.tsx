import styled from "styled-components";
import LaunchList from "./page/Launches/LaunchList";
import DisplayEnergy from "./page/Launches/components/DisplayEnergy";
import { useApp } from "./context";

function App() {
  const { hasSelectedLaunches } = useApp();
  
  return (
    <Container>
      <h1>SpaceX Launches</h1>
      <LaunchList />
      {hasSelectedLaunches && <DisplayEnergy />}
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
