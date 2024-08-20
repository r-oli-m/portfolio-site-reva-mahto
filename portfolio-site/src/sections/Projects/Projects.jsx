import styles from "./Projects.module.css";
import ProjectCard from "../../common/ProjectCard";
import luna from "../../assets/luna.png";
import doroim from "../../assets/doroim.png";
import dance from "../../assets/dance.png";
import planner from "../../assets/planner.png";
import selftour from "../../assets/selfTour.png";
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
        
      </div>
    </section>
  );
}

export default Projects;
