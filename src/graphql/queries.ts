import { gql } from '@apollo/client';

export const GET_LAUNCHES = gql`
  query GetLaunches($limit: Int!, $offset: Int!) {
    launches(limit: $limit, offset: $offset) {
      id
      launch_date_utc
      mission_name
      launch_year
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
        video_link
      }
    }
  }
`;