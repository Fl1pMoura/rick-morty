export interface Location {
  id: number; // The id of the location
  name: string; // The name of the location
  type: string; // The type of the location
  dimension: string; // The dimension in which the location is located
  residents: string[]; // List of characters who have been last seen in the location
  url: string; // Link to the location's own endpoint
  created: string; // Time at which the location was created in the database
}

export interface Info {
  count: number; // Number of items in the response
  pages: number; // Number of pages
  next: string | null; // Link to the next page, if it exists
  prev: string | null; // Link to the previous page, if it exists
}

export interface LocationResponse {
  info: Info; // Additional information about the response
  results: Location[]; // Array of locations
}
