import styles from "./Projects.module.css";
import viberr from "../../assets/viberr.png";
import ProjectCard from "../../common/ProjectCard";
import fitlift from "../../assets/fitlift.png";
import freshburger from "../../assets/fresh-burger.png";
import hipsster from "../../assets/hipsster.png";
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle"> Projects</h1>
      <div className={styles.projectContainer}>
        <ProjectCard
          src={viberr}
          link="https://youtu.be/n19oWWeioOc"
          title="Luna"
          descrip="Robot Cat"
        />
        <ProjectCard
          src={fitlift}
          link="https://self-tour.vercel.app/"
          title="Self Tour"
          descrip="Naviagtion Site"
        />
        <ProjectCard
          src={freshburger}
          link="https://github.com/r-oli-m/dance_site"
          title="Dance The Night Away"
          descrip="Social Media Site"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/r-oli-m/doroim"
          title="Doroim"
          descrip="Dorm Room Inventory"
        />
        <ProjectCard
          src={viberr}
          link="https://devpost.com/software/ucsc-major-reqs-planner"
          title="UCSC 4 Year Planner"
          descrip="Academic Organizer"
        />
        
      </div>
    </section>
  );
}

export default Projects;
