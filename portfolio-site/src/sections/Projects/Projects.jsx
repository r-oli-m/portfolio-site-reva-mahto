import styles from "./Projects.module.css";
import ProjectCard from "../../common/ProjectCard";
import luna from "../../assets/luna.png";
import doroim from "../../assets/doroim.png";
import dance from "../../assets/dance.png";
import planner from "../../assets/planner.png";
import selftour from "../../assets/selfTour.png";
import gwc from "../../assets/gwc.png"
import book_recomender from "../../assets/book_recomender.png"
import rideshare from "../../assets/rideshare.png"
import flu_forecasting from "../../assets/flu_forecasting.png"


function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle"> Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={luna}
          link="https://youtu.be/n19oWWeioOc"
          title="Luna"
          descrip="Robot Cat"
        />
        <ProjectCard
          src={selftour}
          link="https://self-tour.vercel.app/"
          title="Self Tour"
          descrip="Tourist Navigation Site"
        />
        <ProjectCard
          src={dance}
          link="https://github.com/r-oli-m/dance_site"
          title="Dance The Night Away"
          descrip="Social Media Site"
        />
        <ProjectCard
          src={doroim}
          link="https://github.com/r-oli-m/doroim"
          title="Doroim"
          descrip="Dorm Room Inventory"
        />
        <ProjectCard
          src={planner}
          link="https://devpost.com/software/ucsc-major-reqs-planner"
          title="UCSC 4 Year Planner"
          descrip="Academic Organizer"
        />
        <ProjectCard
          src={gwc}
          link="https://github.com/MadelineMiller/ucsc-gwc-webapp"
          title="UCSC GWC Website"
          descrip="Community Hub"
        />
        <ProjectCard
          src={book_recomender}
          link="https://github.com/MadelineMiller/nlp-book-recommendations?tab=readme-ov-file"
          title="NLP Book Reccomender"
          descrip="From user preferences"
          />
        <ProjectCard
          src={rideshare}
          link="https://github.com/siddhantmadhur/rideshare/blob/main/release_docs/USER_GUIDE.md"
          title="Rideshare"
          descrip="Student Carpooling App"
          />
        <ProjectCard
          src={flu_forecasting}
          link="https://github.com/zainamushtaq/Google_1C"
          title="Flu Forecasting"
          descrip="Using Google Search trends"
          />
        
      </div>
    </section>
  );
}

export default Projects;
