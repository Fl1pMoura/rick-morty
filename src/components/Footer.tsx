import logo from "@/assets/logo.svg";
import { ScrollIcon } from "./icons/ScrollIcon";
import { Link } from "react-router-dom";
import { Copyright } from "lucide-react";
import { CodeIcon } from "./icons/CodeIcon";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 mt-auto">
      <nav className="flex items-center justify-between pb-20 mb-6 border-b-2 border-[#D9D9D9]">
        <Link className="block w-full max-w-40" to={"/"}>
          <img src={logo} alt="" />
        </Link>
        <span
          onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
          className="flex text-nowrap items-center gap-2"
          role="button"
        >
          Scroll to Top <ScrollIcon classname="w-10" />
        </span>
      </nav>
      <div className="flex items-center justify-between text-sm">
        <span className="flex items-center gap-1">
          <Copyright className="w-3" />
          {currentYear}
        </span>
        <span className="flex items-center">
          <CodeIcon classname="w-6 mr-2" />
          Developed by <b className="text-[#11B0C8] ml-1">Felipe Moura</b>
        </span>
      </div>
    </footer>
  );
}
