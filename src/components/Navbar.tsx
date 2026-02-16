import '../styles/navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <a href="#hero" className="nav-link">Home</a>
                <a href="#projects" className="nav-link">Projects</a>
                <a href="#experience" className="nav-link">Experience</a>
                <a href="#contact" className="nav-link">Contact</a>
            </div>
        </nav>
    );
}
