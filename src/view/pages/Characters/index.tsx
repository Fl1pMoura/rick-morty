import { useCharacters } from "../../../app/hooks/useCharacters"
import { CharacterCard } from "./Components/CharacterCard"

export function Characters(){
  const { characters } = useCharacters()
  return (
    <section className="w-full max-w-7xl m-auto py-20 px-5">
      
      <ul className="grid grid-cols-[repeat(auto-fit,_minmax(238px,_1fr))] gap-4">
        {characters.map(character => (
            <CharacterCard image={character.image} name={character.name} origin={character.origin.name} status={character.status}  />
        ))}
      </ul>
    </section>

  )
}