import logo from "@/assets/logo.svg";
import { ScrollIcon } from "./icons/ScrollIcon";
import { Link } from "react-router-dom";
import { Copyright } from "lucide-react";
import { CodeIcon } from "./icons/CodeIcon";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 mt-auto">
      <nav className="flex flex-col-reverse lg:flex-row items-center justify-between gap-4 lg:gap-0 pb-4 lg:pb-20 mb-4 lg:mb-6 border-b-2 border-[#D9D9D9]">
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
      <div className="flex flex-col lg:flex-row gap-3 lg:gap-0 items-center justify-between text-sm">
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
