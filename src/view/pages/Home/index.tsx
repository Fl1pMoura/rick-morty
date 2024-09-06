import hero from "@/assets/RickMortyHero.webp";
import { SearchIcon } from "@/components/icons/SearchIcon";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <section className="flex justify-between items-center mt-3 relative">
        <div className="max-w-[480px] space-y-6">
          <h2 className="text-5xl font-bold text-projectGray-1">
            Find everything you need in one{" "}
            <b className="text-projectBlue-1 font-bold">place.</b>
          </h2>
          <p className="text-projectGray-1">
            Characters, locations, episodes, and much more.
          </p>
          <small className="block text-projectBlue-1 text-base">
            Wubba Lubba Dub Dub! Watch out for your eyes!
          </small>
        </div>
        <figure>
          <img src={hero} alt="" />
        </figure>
        <span className="border-2 border-projectBlue-1 absolute w-dvw bottom-0 left-[-27.1%]"></span>
      </section>

      <section className="pt-16 pb-20">
        <div className="relative max-w-[405px] w-full">
          <input
            type="text"
            className="w-full max-w-[405px] min-h-12 border-[1px] border-projectGray-1 rounded-[32px] px-4 pt-4 pr-12
             outline-none text-projectGray-1 transition-all peer placeholder-shown:pt-0"
            placeholder=""
          />

          <label
            htmlFor="character"
            className="absolute text-xs left-[17px] top-2 pointer-events-none text-gray-700 opacity-70 peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 transition-all"
          >
            Character
          </label>

          <SearchIcon classname="size-6 absolute right-5 top-1/2 -translate-y-1/2" />
        </div>

        <div>
          <header className="flex gap-4">
            <h4 className="text-projectGray-1 font-bold text-2xl">
              Characters
            </h4>
            <Link to="/characters" className="" />
          </header>
        </div>
      </section>
    </>
  );
}
