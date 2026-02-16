import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import '../styles/contacts.css';

export default function Contact() {
    return (
        <section id="contact">
            <div className="contact-header">
                <h2 className="contact-header__title">Get in Touch</h2>
                <p className="contact-header__subtitle">
                    Feel free to reach out
                </p>
            </div>

            <div className="contact-icons">
                <a
                    href="https://github.com/riku-afk"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="contact-icon"
                >
                    <FaGithub />
                    <span>GitHub</span>
                </a>

                <a
                    href="https://www.linkedin.com/in/jerald-punzalan-4baa02258/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="contact-icon"
                >
                    <FaLinkedin />
                    <span>LinkedIn</span>
                </a>

                <a
                    href="mailto:jeraldpunzalan201@gmail.com"
                    aria-label="Email"
                    className="contact-icon"
                >
                    <MdEmail />
                    <span>Email</span>
                </a>

                <a
                    href="https://www.facebook.com/jerald.punzalan.53164"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    className="contact-icon"
                >
                    <FaFacebook />
                    <span>Facebook</span>
                </a>
            </div>
        </section>
    );
}
