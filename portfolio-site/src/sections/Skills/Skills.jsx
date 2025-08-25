import styles from "./Skills.module.css";
import checkMarkLight from "../../assets/checkmark-light.svg";
import checkMarkDark from "../../assets/checkmark-dark.svg";
import { useTheme } from "../../common/ThemeContext";

const skillsList = [
  [
    "Python", "SQL", "R", "Java", "C++", "C", "MATLAB", "Swift", 
    "JavaScript", "Golang", "Docker", "Flask", "Linux"
  ],
  [
    "React", "React Native", "NumPy", "Pandas", 
    "Matplotlib", "scikit-learn", "ggplot2", "Seaborn", "Haskell"
  ],
  [
    "Firebase", "MongoDB", "Google Cloud"
  ],
  [
    "Git", "Linux", "XCode", "VSCode", "Google Colab", "JupyterLab", 
    "Eclipse", "Tableau"
  ],
];
function Skills() {
  const { theme, toggleTheme } = useTheme();

  const checkMark = theme === "light" ? checkMarkDark : checkMarkLight;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillContainer}>{/* div skill container */}
        {skillsList.map((category, index) => (
          <div key={index} className={styles.skillList}>{/* div skill list */}
            {category.map((skill, idx) => (
              <div key={idx} className={styles.skillItem}>{/* div skill item */}
                <img
                  src={checkMark}
                  alt="check mark"
                  className={styles.checkMark}
                />
                <p>{skill}</p>
              </div>
            ))}
          </div>
        ))}
        
      </div>
    </section>
  );
}

export default Skills;
