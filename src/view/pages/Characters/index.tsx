import { useCharacters } from "../../../app/hooks/useCharacters"

export function Characters(){
  const { characters } = useCharacters()
  return (
    <ul>
      {characters.map(character => (
        <li key={character.id}>
          {character.name}
          <img src={character.image} alt={character.name} />
        </li>
      ))}
    </ul>
  )
}