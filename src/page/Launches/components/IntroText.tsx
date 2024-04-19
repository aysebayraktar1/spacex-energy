import styled from "styled-components";

const IntroText = () => {
  return (
    <TextContainer>
      <strong>
        Is a trip to space worth the energy? 
      </strong>
      <p>
        Here, we explore the significant amount of energy required for each
        SpaceX launch and what this means for potential space travelers and the
        broader environmental impact. 
      </p>
    </TextContainer>
  );
};

const TextContainer = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  margin: 20px;
  width: 90%;
`;

export default IntroText;
