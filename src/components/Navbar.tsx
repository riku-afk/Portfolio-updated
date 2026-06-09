import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import '../styles/navbar.css';

const NAV_ITEMS = [
    { id: 'hero',       label: 'Home'       },
    { id: 'projects',   label: 'Projects'   },
    { id: 'experience', label: 'Experience' },
    { id: 'contact',    label: 'Contact'    },
] as const;

export default function Navbar() {
    const [open, setOpen]           = useState(false);
    const [scrolled, setScrolled]   = useState(false);
    const [progress, setProgress]   = useState(0);
    const [active, setActive]       = useState<string>('hero');

    /* Scroll shadow + progress bar */
    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20);
            const docH = document.documentElement.scrollHeight - window.innerHeight;
            setProgress(docH > 0 ? (window.scrollY / docH) * 100 : 0);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    /* Active section tracking */
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id);
                });
            },
            { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
        );
        NAV_ITEMS.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    /* Lock body scroll when menu is open */
    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [open]);

    const close = () => setOpen(false);

    return (
        <nav
            className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}
            aria-label="Main navigation"
        >
            <div className="nav-container">
                <a href="#hero" className="nav-brand" onClick={close} aria-label="Back to top">
                    JP
                </a>

                <div
                    className={`nav-links${open ? ' nav-links--open' : ''}`}
                    role="menu"
                >
                    {NAV_ITEMS.map(({ id, label }) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            className={`nav-link${active === id ? ' nav-link--active' : ''}`}
                            onClick={close}
                            role="menuitem"
                            aria-current={active === id ? 'page' : undefined}
                        >
                            {label}
                        </a>
                    ))}
                </div>

                <button
                    className="nav-toggle"
                    onClick={() => setOpen((o) => !o)}
                    aria-label={open ? 'Close menu' : 'Open menu'}
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                >
                    {open ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
                </button>
            </div>

            {/* Scroll progress indicator */}
            <div
                className="nav-progress"
                style={{ width: `${progress}%` }}
                aria-hidden="true"
            />
        </nav>
    );
}
