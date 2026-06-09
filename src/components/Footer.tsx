export default function Footer() {
    return (
        <footer className="footer" role="contentinfo">
            <div className="footer-inner">
                <a href="#hero" className="footer-brand" aria-label="Back to top">JP</a>

                <nav className="footer-nav" aria-label="Footer navigation">
                    <a href="#projects"   className="footer-nav__link">Projects</a>
                    <a href="#experience" className="footer-nav__link">Experience</a>
                    <a href="#contact"    className="footer-nav__link">Contact</a>
                </nav>

                <p className="footer-copy">© 2026 Jerald Punzalan</p>
            </div>
        </footer>
    );
}
