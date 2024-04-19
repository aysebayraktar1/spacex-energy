import React, { FC, PropsWithChildren } from "react";
import styled from "styled-components";

type Props = {
  style?: React.CSSProperties;
} & React.HTMLAttributes<HTMLDivElement>;

const Card: FC<PropsWithChildren<Props>> = ({ children, style, ...props }) => {
  return (
    <Container style={style} {...props}>
      {children}
    </Container>
  );
};

const Container = styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

export default Card;
