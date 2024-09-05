import logo from "@/assets/logo.svg";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="max-w-7xl mx-auto px-5 py-8">
      <nav className="flex items-center justify-between">
        <figure className="block w-full max-w-[220px]">
          <img src={logo} alt="" />
        </figure>
        <Link
          className="bg-[#11B0C8] text-white rounded-2xl flex items-center justify-center px-3 min-h-8 text-sm font-semibold tracking-wide transition-all hover:bg-[#BFDE42] hover:text-[#1E1E20]"
          to={"/about"}
        >
          About Me
        </Link>
      </nav>
    </header>
  );
}
