export interface Character {
  id: number; // The id of the character.
  name: string; // The name of the character.
  status: "Alive" | "Dead" | "unknown"; // The status of the character ('Alive', 'Dead' or 'unknown').
  species: string; // The species of the character.
  gender: "Female" | "Male" | "Genderless" | "unknown"; // The gender of the character ('Female', 'Male', 'Genderless' or 'unknown').
  image: string; // Link to the character's image. All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
  origin: {
    name: string; // Name of the character's origin location.
    url: string; // Link to the character's origin location.
  };
  location: {
    name: string;
    url: string;
  };
  episode: string[]; // List of episodes (urls) in which this character appeared.
}

export interface Info {
  count: number; // Number of items in the response
  pages: number; // Number of pages
  next: string | null; // Link to the next page, if it exists
  prev: string | null; // Link to the previous page, if it exists
}

export interface CharacterResponse {
  info: Info; // Additional information about the response
  results: Character[]; // Array of characters
}
