import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import '../styles/navbar.css';

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const close = () => setOpen(false);

    return (
        <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <div className="nav-container">
                <a href="#hero" className="nav-brand" onClick={close}>JP</a>

                <div className={`nav-links ${open ? 'nav-links--open' : ''}`}>
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
