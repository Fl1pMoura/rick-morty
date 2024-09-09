import logo from "@/assets/logo.svg";
import { Link } from "react-router-dom";
import { LinkComponent } from "./LinkComponent";

export function Header() {
  return (
    <header className="py-8">
      <nav className="flex flex-col gap-5 lg:gap lg:flex-row items-center justify-between">
        <Link className="block w-full max-w-[220px]" to={"/"}>
          <img src={logo} alt="" />
        </Link>
        <LinkComponent classname="w-full max-w-80 lg:w-auto" to={"/about"}>
          About Me
        </LinkComponent>
      </nav>
    </header>
  );
}
