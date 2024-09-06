import logo from "@/assets/logo.svg";
import { Link } from "react-router-dom";
import { LinkComponent } from "./LinkComponent";

export function Header() {
  return (
    <header className="py-8">
      <nav className="flex items-center justify-between">
        <Link className="block w-full max-w-[220px]" to={"/"}>
          <img src={logo} alt="" />
        </Link>
        <LinkComponent to={"/about"}>About Me</LinkComponent>
      </nav>
    </header>
  );
}
