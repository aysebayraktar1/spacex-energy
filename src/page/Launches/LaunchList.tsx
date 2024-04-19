import { GET_LAUNCHES } from "../../graphql/queries";
import { useQuery } from "@apollo/client";
import { Launch } from "../../types/Launch";

const LaunchList = () => {
  const { data, error, loading } = useQuery(GET_LAUNCHES);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <div>
      {data.launches.map((launch: Launch) => (
        <div key={launch.id}>
          <h2>{launch.mission_name}</h2>
        </div>
      ))}
    </div>
  );
};

export default LaunchList;