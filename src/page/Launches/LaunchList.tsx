import { GET_LAUNCHES } from "../../graphql/queries";
import { useQuery } from "@apollo/client";
import { Launch } from "../../types/Launch";
import styled from "styled-components";
import LaunchCard from "./components/LaunchCard";
import { useCallback, useMemo, useState } from "react";
import Skeleton from "../../components/Skeleton";
import DisplayEnergy from "./components/DisplayEnergy";
import { useLaunchManagement } from "./context/launches";
import LaunchesPerYearBarChart from "./graphs/LaunchesPerYearBarChart";
import RocketDistributionPieChart from "./graphs/RocketDistributionPieChart";

const PAGE_LIMIT = 12;

const LaunchList = () => {
  const { hasSelectedLaunches } = useLaunchManagement();
  const { data, loading, fetchMore, error } = useQuery(GET_LAUNCHES, {
    variables: { limit: PAGE_LIMIT, offset: 0 },
  });

  const hasMore = useMemo(() => {
    return data?.launches.length % PAGE_LIMIT === 0;
  }, [data]);

  const [loadingMore, setLoadingMore] = useState<boolean>(false);

  const loadMoreLaunches = useCallback(async () => {
    if (!hasMore) return;
    try {
      setLoadingMore(true);
      await fetchMore({
        variables: {
          offset: data.launches?.length,
        },
      });
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingMore(false);
    }
  }, [fetchMore, data]);

  if (loading) {
    return (
      <ListContainer>
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
      <GraphsContainer>
        <LaunchesPerYearBarChart launches={data.launches} />
        <RocketDistributionPieChart launches={data.launches} />
      </GraphsContainer>
      <ListContainer>
        {data.launches.map((launch: Launch) => (
          <LaunchCard key={launch.id} launch={launch} />
        ))}
      </ListContainer>
      {hasMore && (
        <LoadMoreButton onClick={loadMoreLaunches}>
          {loadingMore ? "Loading..." : "See More"}
        </LoadMoreButton>
      )}
      {hasSelectedLaunches && <DisplayEnergy />}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin: 30px 0;
`;

const GraphsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin: 30px 0;
  width: 100%;
  align-items: center;
`;

const LoadMoreButton = styled.button`
  padding: 10px 20px;
  background-color: #1f1f1f;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 20px 0;
  font-size: 16px;
  transition: all 0.3s;

  &:hover {
    background-color: #333;
  }
`;

export default LaunchList;
