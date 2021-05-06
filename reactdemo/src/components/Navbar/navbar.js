import React from 'react'

function navbar() {
    return (
        <div className="nav">
            <a href="/home" id="headerHome">Home</a>
            <a href="/About" id="headerAbout">About</a>
            <a href="/Us" id="headerUs">Us</a>
            <a href="/Contact" id="headerContact">Contact</a>
        </div>
    )
}

export default navbar
