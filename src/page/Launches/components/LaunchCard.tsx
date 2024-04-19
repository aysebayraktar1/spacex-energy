import { FC } from "react";
import { Launch } from "../../../types/Launch";
import Card from "../../../components/Card";
import styled from "styled-components";
import { formatDate } from "../../../helpers/dateHelpers";
import { ArrowRightIcon, CalendarIcon } from "../../../icons/Icons";

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
    <Container>
      <ButtonContainer>
        <Button onClick={handleSelect}>Add Energy Consumption</Button>
      </ButtonContainer>
      <Image
        src={launch.links.flickr_images[0] ?? PLACEHOLDER_IMG}
        alt={launch.mission_name}
      />
      <Content>
        <TitleContainer>
          <Title>
            {launch.mission_name} - {launch.rocket.rocket_name}
          </Title>
          <DateContainer>
            <CalendarIcon />
            <p>{formatDate(launch.launch_date_utc)}</p>
          </DateContainer>
        </TitleContainer>
        <TitleContainer>
          <Description>{launch.mission_name}</Description>
          <Link
            href={launch.links.video_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ArrowRightIcon
              style={{
                rotate: "-45deg",
              }}
            />
          </Link>
        </TitleContainer>
      </Content>
    </Container>
  );
};

const Container = styled(Card)`
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

const Content = styled.div`
  padding: 0 10px;
`;

const Title = styled.h3`
  margin: 0;
`;

const Image = styled.img`
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
  height: 30px;
`;

const DateContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Description = styled.p`
  margin: 0;
`;

const Link = styled.a`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default LaunchCard;
