import Link from "next/link";
// import "./../index.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHome,
  faPen,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import LogoImage from "./../../../assets/images/logo-a.png";
import "./index.scss";

export default function Header() {
  return (
    <div className="nav-bar h-screen">
      <Link className="logo" href="/">
        <Image src={LogoImage} alt="Logo" width={100} />
      </Link>
      <nav>
        <Link href="/#Hero">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </Link>
        <Link className="about-link" href="/#About">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </Link>
        <Link className="blog-link" href="/blog">
          <FontAwesomeIcon icon={faPen} color="#4d4d4e" />
        </Link>
        <Link className="contact-link" href="/#contact">
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </Link>
      </nav>
      <ul>
        <li>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/anuja-rahul-gunasinghe-83b589266"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.github.com/anuja-rahul"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://youtube.com"
          >
            <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com"
          >
            <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
