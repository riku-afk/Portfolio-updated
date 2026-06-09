import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FiArrowRight } from 'react-icons/fi';
import '../styles/contacts.css';

export default function Contact() {
    return (
        <section id="contact" aria-labelledby="contact-title">
            <div className="contact-header">
                <h2 id="contact-title" className="section-title" data-reveal>Get in Touch</h2>
                <p className="section-subtitle" data-reveal data-delay="1">Feel free to reach out</p>
            </div>

            <div className="contact-body">
                {/* Primary email CTA */}
                <div className="contact-cta" data-reveal data-delay="2">
                    <p className="contact-cta__text">
                        I'm currently open to new opportunities. Whether you have a project in mind,
                        a job offer, or simply want to say hello — my inbox is always open.
                    </p>
                    <a
                        href="mailto:jeraldpunzalan201@gmail.com"
                        className="contact-cta__button"
                        aria-label="Send an email to Jerald Punzalan"
                    >
                        <MdEmail aria-hidden="true" />
                        <span>Send an Email</span>
                        <FiArrowRight aria-hidden="true" />
                    </a>
                </div>

                {/* Social links */}
                <div className="contact-socials" role="list" aria-label="Social media links" data-reveal data-delay="3">
                    <a
                        href="https://github.com/riku-afk"
                        target="_blank"
                        rel="noreferrer"
                        className="contact-icon contact-icon--github"
                        role="listitem"
                        aria-label="GitHub profile"
                    >
                        <FaGithub aria-hidden="true" />
                        <span>GitHub</span>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/jerald-punzalan-4baa02258/"
                        target="_blank"
                        rel="noreferrer"
                        className="contact-icon contact-icon--linkedin"
                        role="listitem"
                        aria-label="LinkedIn profile"
                    >
                        <FaLinkedin aria-hidden="true" />
                        <span>LinkedIn</span>
                    </a>

                    <a
                        href="https://www.facebook.com/jerald.punzalan.53164"
                        target="_blank"
                        rel="noreferrer"
                        className="contact-icon contact-icon--facebook"
                        role="listitem"
                        aria-label="Facebook profile"
                    >
                        <FaFacebook aria-hidden="true" />
                        <span>Facebook</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
