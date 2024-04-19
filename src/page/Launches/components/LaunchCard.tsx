import { FC } from "react";
import { Launch } from "../../../types/Launch";
import Card from "../../../components/Card";
import styled from "styled-components";

type Props = {
  launch: Launch;
  onSelect: (launch: Launch) => void;
};

const PLACEHOLDER_IMG =
  "https://farm3.staticflickr.com/2922/33578359423_4169ac8f98_o.jpg";

const LaunchCard: FC<Props> = ({ launch, onSelect }) => {
  const handleSelect = () => {
    onSelect(launch);
  };

  return (
    <CardContainer>
      <ButtonContainer>
        <Button onClick={handleSelect}>Add Energy Consumption</Button>
      </ButtonContainer>
      <CardImage
        src={launch.links.flickr_images[0] ?? PLACEHOLDER_IMG}
        alt={launch.mission_name}
      />
      <CardContent>
        <CardTitle>
          {launch.mission_name} - {launch.rocket.rocket_name}
        </CardTitle>
      </CardContent>
    </CardContainer>
  );
};

const CardContainer = styled(Card)`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  width: 400px;
  height: 300px;
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 1;
`;

const CardContent = styled.div`
  padding: 10px;
`;

const CardTitle = styled.h3`
  margin: 0;
`;

const CardImage = styled.img`
  width: 100%;
  max-width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
`;

const Button = styled.button`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: none;
  border-radius: 10px;
  padding: 4px 10px;
  font-size: 14px;
  font-weight: 600;
`;

export default LaunchCard;
