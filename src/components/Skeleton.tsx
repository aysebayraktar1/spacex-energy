import React from "react";
import styled, { keyframes } from "styled-components";

type CardSkeletonProps = {
  style?: React.CSSProperties;
};

const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`;

const SkeletonLoader = styled.div`
  display: inline-block;
  height: 100%;
  width: 100%;
  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #eeeeee 8%,
    #dddddd 18%,
    #eeeeee 33%
  );
  background-size: 800px 104px;
  position: relative;
  animation: ${shimmer} 1.2s infinite linear;
`;

const Skeleton: React.FC<CardSkeletonProps> = ({ style }) => {
  return <SkeletonLoader style={style} />;
};

export default Skeleton;
