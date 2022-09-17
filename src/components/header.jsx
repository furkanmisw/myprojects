import React, { memo } from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [check, setCheck] = useState(false);
  const location = useLocation();
  const active = (current) => {
    return {
      style: { color: location.pathname === current ? "#000" : "#918ebf" },
    };
  };
  useEffect(() => {
    document.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => setCheck(!check));
    });
  }, []);
  return (
    <div className="header">
      <Link to="/">
        <h1>#MyProjects</h1>
      </Link>
      <ul>
        <li>
          <Link to="/">
            <p {...active("/")}>Desgins</p>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <p {...active("/about")}>About</p>
          </Link>
        </li>
        <li>
          <Link to="/license">
            <p {...active("/license")}>License</p>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <p {...active("/contact")}>Contact</p>
          </Link>
        </li>
      </ul>
      <div className="btn">
        <input
          id="drop"
          type="checkbox"
          checked={check}
          onChange={(e) => setCheck(e.target.checked)}
        />
        <CloseIcon />
        <MenuIcon />
        <div className="listview">
          <ul>
            <li>
              <Link to="/">
                <p {...active("/")}>Desgins</p>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <p {...active("/about")}>About</p>
              </Link>
            </li>
            <li>
              <Link to="/license">
                <p {...active("/license")}>License</p>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <p {...active("/contact")}>Contact</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="close"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}
function MenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="menu"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
}
export default memo(Header);
