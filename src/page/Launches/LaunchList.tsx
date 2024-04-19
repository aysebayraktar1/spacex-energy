import { GET_LAUNCHES } from "../../graphql/queries";
import { useQuery } from "@apollo/client";
import { Launch } from "../../types/Launch";
import styled from "styled-components";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import LaunchCard from "./components/LaunchCard";
import { useCallback } from "react";

const PAGE_LIMIT = 12;

const LaunchList = () => {
  const { data, loading, fetchMore, error } = useQuery(GET_LAUNCHES, {
    variables: { limit: PAGE_LIMIT, offset: 0 },
  });

  const loadMoreLaunches = useCallback(() => {
    fetchMore({
      variables: {
        offset: data?.launches.length,
      },
    });
  }, [fetchMore, data?.launches.length]);

  const [isFetching, setIsFetching] = useInfiniteScroll(loadMoreLaunches);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <ListContainer>
        {data.launches.map((launch: Launch) => (
          <LaunchCard key={launch.id} launch={launch} onSelect={() => {}} />
        ))}
      </ListContainer>
      {isFetching && <p>...</p>}
    </div>
  );
};

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export default LaunchList;
