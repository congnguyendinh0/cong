import React from 'react'
import {Link} from 'react-router-dom'

function Nav(props) {
    const navStyle={
        color:'white'
    }

    return (
        <nav>
            <ul className="nav-links">
                <li>Rasa</li>
                <Link to="/jokes" style={navStyle}><li>Jokes</li></Link> 
                <Link to="/quotes" style={navStyle}><li>Quote</li></Link> 
                <Link to="/motion" style={navStyle}><li>Motion</li></Link>
                <Link to="/about" style={navStyle}><li>About</li></Link>
               
            </ul>
        </nav>
    )
}

export default Nav
