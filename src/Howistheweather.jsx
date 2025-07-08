import ProjectModal from './Components/ProjectModal';
import { projectsData } from './data/projectData';

function Main({ onClick }) {
  return (
    <ProjectModal 
      onClick={onClick} 
      projectData={projectsData.howistheweather} 
    />
  );
}

export default Main;
