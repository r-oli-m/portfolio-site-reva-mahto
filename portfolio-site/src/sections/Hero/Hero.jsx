import styles from "./Hero.module.css";
import heroImg from "../../assets/hero-img.png";
import sunIcon from "../../assets/sun.svg";
import githubLight from "../../assets/github-light.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import { useTheme } from "../../common/ThemeContext";
import moonIcon from "../../assets/moon.svg";
import { FaSpotify } from "react-icons/fa";
import { AiOutlineSpotify } from "react-icons/ai";



function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sunIcon : moonIcon;
  const spotifyColor = theme === "light" ? "#000000" : "#ffffff";
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="Reva Profile Pic" />
        <img src={themeIcon}
          alt="Theme mode icon"
          className={styles.colorMode}
          onClick={toggleTheme} />
      </div>
      <div className={styles.info}>
        <h1>
          Reva
          <br />
          Mahto
        </h1>

        <span>
          <a href="https://open.spotify.com/user/aaxqrvpqbx32qejyoybxjxr7k?si=4e44052f297f4233" target="_blank">
            <FaSpotify style={{ color: spotifyColor, fontSize: '24px' }} />
          </a>
          <a href="https://github.com/r-oli-m" target="_blank">
            <img src={githubIcon} alt="Github Icon" />
          </a>
          <a href="https://www.linkedin.com/in/reva-mahto/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin Icon" />
          </a>
        </span>

        <p className={styles.description}>
          Passion for Web Development, Machine Learning, and Software Engineering.
        </p>
        <h2>Other Things I Love</h2>
        <div className={styles.meContainer}>
          <ul>
            <li>boba 🧋&nbsp;&nbsp;my dog 🐶</li>
            <li>dance 💃&nbsp;&nbsp;sports 🏐</li>
            <li>games 🎲&nbsp;&nbsp;music 🎵</li>
            <li>funny shows and people 😆</li>
            <li>cooking yummy food 🍱</li>
            <li>hanging out at the beach 🌊</li>
          </ul>

        </div>
      </div>
    </section>
  );
}

export default Hero;
