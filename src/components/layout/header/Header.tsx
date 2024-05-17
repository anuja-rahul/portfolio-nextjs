import "./../index.scss";
import LogoImage from "./../../../assets/images/logo-no-background.svg";
import Image from "next/image";

export default function Header() {
  return (
    <div className="navbar rounded-full bg-sky-950/60 backdrop-blur-xl">
      <div className="navbar-start">
        <div className="dropdown rounded-full">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost rounded-full lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-xl bg-base-100 p-2 shadow"
          >
            <li>
              <a className="rounded-full">Item 1</a>
            </li>
            <li>
              <a className="rounded-full">Parent</a>
              <ul className="p-2">
                <li>
                  <a className="rounded-full">Submenu 1</a>
                </li>
                <li>
                  <a className="rounded-full">Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="rounded-full">Item 3</a>
            </li>
          </ul>
        </div>
        <a className="rounded-full text-xl hover:translate-y-[-3px] transition-[0.6s]">
          <Image src={LogoImage} height={50} alt="Title" className="py-0" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="rounded-full">Item 1</a>
          </li>
          <li className="rounded-full">
            <details>
              <summary className="rounded-full">Parent</summary>
              <ul className="p-2">
                <li>
                  <a className="rounded-full">Submenu</a>
                </li>
                <li>
                  <a className="rounded-full">Submenu</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a className="rounded-full">Item 3</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn rounded-full">Button</a>
      </div>
    </div>
  );
}
