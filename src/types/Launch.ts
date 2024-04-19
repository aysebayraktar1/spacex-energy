export interface Launch {
  id: string;
  launch_date_utc: string;
  launch_year: string;
  mission_name: string;
  rocket: LaunchRocket
  links: LaunchLinks
}

export interface LaunchRocket {
  rocket_name: string;
  rocket: Rocket
}

export interface LaunchLinks {
  flickr_images: string[]
  video_link: string
}

export interface Rocket {
  mass: Mass
}

export interface Mass {
  kg: number
}
