import { gql } from '@apollo/client';

export const GET_LAUNCHES = gql`
  query GetLaunches {
    launches {
      id
      launch_date_utc
      mission_name
      rocket {
        rocket_name
        rocket {
          mass {
            kg
          }
        }
      }
      links {
        flickr_images
      }
    }
  }
`;