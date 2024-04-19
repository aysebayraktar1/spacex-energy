import styled from "styled-components";
import { useApp } from "../../../context";

const DisplayEnergy = () => {
  const { selectedLaunches, totalEnergyConsumption } = useApp();
  return (
    <Container>
      <List>
        {/* TODO: Create type for selected launches */}
        {Object.values(selectedLaunches).map((launch: any) => (
          <li key={launch.id}>
            {launch.mission_name} - {launch.rocket.rocket_name}
          </li>
        ))}
      </List>
      <TotalEnergyContainer>
        <Title>Total Energy (Approximately) Consumption</Title>
        <h4>{totalEnergyConsumption} kWh</h4>
      </TotalEnergyContainer>
    </Container>
  );
};

const Container = styled.div`
  position: sticky;
  bottom: 0;
  width: 100%;
  background-color: black;
  color: white;
  border-radius: 12px 12px 0px 0px;
  box-shadow: 0px -4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  opacity: 0.9;
  min-height: 100px;
`;

const TotalEnergyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 16px;
`;

const List = styled.ul`
  list-style: none;
`;

const Title = styled.h4`
  margin: 0;
`;

export default DisplayEnergy;
