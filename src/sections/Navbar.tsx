import { type ReactElement } from "react";
import { navbarItems } from "../constants";
import { Link } from "react-router-dom";

export interface NavbarProps {}

export default function Navbar(): ReactElement {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-navbar1 sm:h-navbar2 w-full bg-primary shadow-md shadow-heading/10">
        <nav className="flex justify-between container h-full items-center">
          <Link to="/">
            <h3>Rendi's Blog</h3>
          </Link>
          <ul className="flex gap-sm items-center">
            {navbarItems
              .reverse()
              .map(({ label, iconUrl, autorCreditUrl, locationUrl }, key) => {
                return (
                  <li key={key}>
                    <a href={locationUrl}>
                      <img
                        src={iconUrl}
                        alt={label}
                        title={`Icon by Freepik from ${autorCreditUrl}`}
                        className="size-xl"
                      />
                    </a>
                  </li>
                );
              })}
          </ul>
        </nav>
      </header>
    </>
  );
}
