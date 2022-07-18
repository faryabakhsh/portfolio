import React from 'react'
import './Footer.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <GitHubIcon /> 
            <LinkedInIcon />
            <TwitterIcon />
            <InstagramIcon />
        </div>
        <p> &copy; 2022 Farya Bakhsh</p>
      
    </div>
  )
}

export default Footer
