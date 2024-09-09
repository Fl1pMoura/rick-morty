import { LinkComponent } from "@/components/LinkComponent";
import notFoundBtn from "@/assets/notFoundButtonImg.webp";
import notFoundHero from "@/assets/rickMortyNotFoundHero.webp";

export function NotFound() {
  return (
    <section className="text-projectGray-1 flex flex-col lg:flex-row justify-between relative max-w-80 lg:max-w-full mx-auto lg:mx-0">
      <div>
        <h2 className="text-3xl lg:text-7xl">Oops!</h2>
        <p className="text-lg lg:text-2xl mt-4 mb-14 lg:mt-10 lg:mb-20">
          We couldn`t find the page you were looking for.
        </p>
        <div className="relative max-w-80">
          <figure className="absolute bottom-[calc(100%-20px)] left-1/2 -translate-x-1/2 -z-1 w">
            <img src={notFoundBtn} alt="not found" />
          </figure>
          <LinkComponent
            to="/"
            classname="max-w-80 w-full min-h-16 lg:min-h-24 rounded-full text-2xl lg:text-3xl relative z-10"
          >
            Go back
          </LinkComponent>
        </div>
      </div>
      <figure className="max-w-52 mx-auto mt-7 lg:mt-0 lg:mx-0 lg:max-w-full">
        <img src={notFoundHero} alt="page not found" />
      </figure>
      <span className="border-2 border-projectBlue-1 absolute bottom-0 left-[-300px] lg:left-[-1000px] w-[200vw]"></span>
    </section>
  );
}
