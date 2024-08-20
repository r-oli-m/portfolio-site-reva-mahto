import styles from "./Hero.module.css";
import heroImg from "../../assets/hero-img.png";
import sunIcon from "../../assets/sun.svg";
import RevaResume from "../../assets/Reva-Mahto-Resume.pdf";
import twitterLight from "../../assets/twitter-light.svg";
import githubLight from "../../assets/github-light.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import { useTheme } from "../../common/ThemeContext";
import moonIcon from "../../assets/moon.svg";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sunIcon : moonIcon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
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
        <h2>Full Stack Developer</h2>

        <span>
          <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="Twitter Icon" />
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
        <a href={RevaResume} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
