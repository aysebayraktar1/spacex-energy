import { GET_LAUNCHES } from "../../graphql/queries";
import { useQuery } from "@apollo/client";
import { Launch } from "../../types/Launch";
import styled from "styled-components";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import LaunchCard from "./components/LaunchCard";
import { useCallback } from "react";
import Skeleton from "../../components/Skeleton";
import DisplayEnergy from "./components/DisplayEnergy";
import { useLaunchManagement } from "./context/launches";

const PAGE_LIMIT = 12;

const LaunchList = () => {
  const { hasSelectedLaunches } = useLaunchManagement();
  const { data, loading, fetchMore, error } = useQuery(GET_LAUNCHES, {
    variables: { limit: PAGE_LIMIT, offset: 0 },
  });

  const loadMoreLaunches = useCallback(() => {
    if (data && data.launches.length >= PAGE_LIMIT) {
      return fetchMore({
        variables: {
          offset: data.launches.length,
        },
      });
    } 
  }, [fetchMore, data]);

  const [isFetching, setIsFetching] = useInfiniteScroll(loadMoreLaunches);

  if (loading) {
    return (
      <ListContainer
        style={{
          maxWidth: "1440px",
        }}
      >
        {Array.from(new Array(PAGE_LIMIT)).map((_, index) => (
          <Skeleton
            key={index}
            style={{
              width: "400px",
              height: "300px",
              borderRadius: "10px",
            }}
          />
        ))}
      </ListContainer>
    );
  }

  if (error) return <div>Error: {error.message}</div>;

  return (
    <Container>
      <ListContainer>
        {data.launches.map((launch: Launch) => (
          <LaunchCard key={launch.id} launch={launch} />
        ))}
      </ListContainer>
      {isFetching && <p>...</p>}
      {hasSelectedLaunches && <DisplayEnergy />}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 1440px;
`;

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin: 30px 0;
`;

export default LaunchList;
