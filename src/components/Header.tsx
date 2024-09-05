import logo from "@/assets/logo.svg";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="py-8">
      <nav className="flex items-center justify-between">
        <Link className="block w-full max-w-[220px]" to={"/"}>
          <img src={logo} alt="" />
        </Link>
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
