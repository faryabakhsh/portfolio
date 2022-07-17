import React, {useState} from 'react'
import { Link } from "react-router-dom"
import './Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {

    const [expandNavbar, setExpandNavbar] = useState(false);

  return (
    <div className='navbar' id={expandNavbar ? "open" : "close"}>
        <div className='togglebutton'>
            <button onClick= {()=> {
                setExpandNavbar((prev)=> !prev);
            }}><ReorderIcon /></button>
        </div>
      <div className='links'>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/education">Education</Link>
      </div>
    </div>
  )
}

export default Navbar
