import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";
// import faryaCV.pdf from "../../Public/faryaCV"

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      {/* <h1 className="h1"><a href="">Farya Bakhsh</a></h1>  */}
      <div className="links">
        <Link to="/" className="name">
          Home
        </Link>
        <Link to="/about">About</Link>
        <Link to="/education">Education</Link>
        <Link to="/contact">Contact</Link>
        <a className="button" href="faryaCv.pdf" download="faryaCv.pdf">
          Resume
        </a>
      </div>
    </div>
  );
}
export default Navbar;
