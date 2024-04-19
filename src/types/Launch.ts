export interface Launch {
  id: string;
  launch_date_utc: string;
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
}

export interface Rocket {
  mass: Mass
}

export interface Mass {
  kg: number
}

