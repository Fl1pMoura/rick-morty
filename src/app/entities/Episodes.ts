export interface Episode {
  id: number; // The id of the episode
  name: string; // The name of the episode
  air_date: string; // The air date of the episode
  episode: string; // The code of the episode
  characters: string[]; // List of characters who have been seen in the episode
  url: string; // Link to the episode's own endpoint
  created: string; // Time at which the episode was created in the database
}

export interface Info {
  count: number; // Number of items in the response
  pages: number; // Number of pages
  next: string | null; // Link to the next page, if it exists
  prev: string | null; // Link to the previous page, if it exists
}

export interface EpisodeResponse {
  info: Info; // Additional information about the response
  results: Episode[]; // Array of characters
}
