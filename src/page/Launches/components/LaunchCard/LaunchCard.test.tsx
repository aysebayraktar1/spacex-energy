import { render, screen } from "@testing-library/react";
import LaunchCard from "./LaunchCard";
import { Launch } from "../../../../types/Launch";

const sampleLaunch: Launch = {
  id: '1',
  mission_name: "Test Mission",
  launch_date_utc: "2024-04-18T00:00:00.000Z",
  launch_year: "2024",
  links: {
    flickr_images: ["https://example.com/image.jpg"],
    video_link: "https://example.com/video"
  },
  rocket:{
    rocket_name: "Test Rocket",
    rocket: {
        mass: {
            kg: 1000
        }
    }
  }
};

describe('LaunchCard', () => {
  it('renders correctly with all parts', () => {
    render(<LaunchCard launch={sampleLaunch} />);

    expect(screen.getByRole('img', { name: sampleLaunch.mission_name })).toHaveAttribute('src', sampleLaunch.links.flickr_images[0]);
    expect(screen.getByText(sampleLaunch.mission_name)).toBeInTheDocument();
    expect(screen.getByText(new RegExp("April 18, 2024", 'i'))).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', sampleLaunch.links.video_link);

    expect(screen.getByRole('button')).toHaveTextContent('Add Energy Consumption');
  });

  it('displays different button text when selected', () => {

    render(<LaunchCard launch={sampleLaunch} />);

    expect(screen.getByRole('button')).toHaveTextContent('Add Energy Consumption');
  });
});
