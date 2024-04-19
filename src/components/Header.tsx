import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <Title>SpaceX</Title>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  justify-content: center;
  min-height: 60px;
  background-image: linear-gradient(
    330deg,
    hsl(0deg 0% 0%) 0%,
    hsl(180deg 10% 8%) 0%,
    hsl(180deg 6% 14%) 0%,
    hsl(180deg 4% 20%) 1%,
    hsl(180deg 3% 26%) 5%,
    hsl(180deg 3% 32%) 60%,
    hsl(180deg 2% 39%) 75%,
    hsl(180deg 2% 46%) 85%,
    hsl(180deg 2% 53%) 93%,
    hsl(180deg 2% 61%) 100%
  );
`;

const Title = styled.h1`
  margin: 0;
  color: white;
  width: 100%;
  text-align: center;
  font-size: 24px;
`;

export default Header;
