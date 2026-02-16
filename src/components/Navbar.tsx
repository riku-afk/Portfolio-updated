import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import '../styles/navbar.css';

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const close = () => setOpen(false);

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className={`nav-links ${open ? "nav-links--open" : ""}`}>
                    <a href="#hero" className="nav-link" onClick={close}>Home</a>
                    <a href="#projects" className="nav-link" onClick={close}>Projects</a>
                    <a href="#experience" className="nav-link" onClick={close}>Experience</a>
                    <a href="#contact" className="nav-link" onClick={close}>Contact</a>
                </div>

                <button
                    className="nav-toggle"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    {open ? <FiX /> : <FiMenu />}
                </button>
            </div>
        </nav>
    );
}
