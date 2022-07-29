import React from "react";
import "./Footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <div className="footer">
       <p> &copy; 2022 Farya Bakhsh</p> 
      <div className="socialMedia">
        <a href="https://github.com/faryabakhsh" target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/faryabakhsh7/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </a>

        <a href="https://twitter.com/BakhshFarya" target="_blank" rel="noopener noreferrer">
          <TwitterIcon />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <InstagramIcon />
        </a>
      </div>
    </div>
  );
}

export default Footer;
