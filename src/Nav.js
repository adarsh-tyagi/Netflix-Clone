import React, { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router";
import "./Nav.css";

function Nav() {
  const [show, setShow] = useState(false);
  const history = useHistory();
  const [showLinks, setShowLinks] = useState(true);
  const ref = useRef(null);

  const screenSize = () => {
    if (window.innerWidth <= 650) {
      setShowLinks(false);
    } else {
      setShowLinks(true);
    }
  };

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    screenSize();
    window.addEventListener("scroll", transitionNavBar);
    window.addEventListener("resize", screenSize);
    return () => {
      window.removeEventListener("scroll", transitionNavBar);
      window.removeEventListener("resize", screenSize);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          onClick={() => history.push("/")}
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
          alt="netflix logo"
        />
        {showLinks ? (
          <div className="nav__links">
            <p onClick={() => history.push("/")}>Home</p>
            <p onClick={() => history.push("/movies")}>Movies</p>
            <p onClick={() => history.push("/shows")}>TV Shows</p>
          </div>
        ) : (
          <div className="nav__linksIcon">
            <select onChange={() => history.push(ref.current.value)} ref={ref}>
              <option value="/">Home</option>
              <option value="/movies">Movies</option>
              <option value="/shows">TV Shows</option>
            </select>
          </div>
        )}

        <img
          onClick={() => history.push("/profile")}
          className="nav__avatar"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
          alt="user avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
