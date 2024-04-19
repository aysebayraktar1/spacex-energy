import styled from "styled-components";
import { useLaunchManagement } from "../context/launches";
import { calculateLaunchEnergy } from "../../../helpers/energyCalculatorHelper";

const DisplayEnergy = () => {
  const { selectedLaunches, totalEnergyConsumption } =
    useLaunchManagement();
  
  return (
    <Container>
      <List>
        {Object.values(selectedLaunches).map((launch: any) => (
          <ListItem key={launch.id}>
            {launch.mission_name}: {calculateLaunchEnergy(launch)} kWh
          </ListItem>
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
  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    flex-flow: column-reverse;
  }
`;

const TotalEnergyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 16px;
  @media (max-width: 600px) {
    align-items: center;
  }
`;

const List = styled.ul`
  list-style: none;
  padding-inline-start: 0;
`;

const ListItem = styled.li`
  padding: 4px 16px;
`;
const Title = styled.h4`
  margin: 0;
`;

export default DisplayEnergy;
