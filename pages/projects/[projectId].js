// individual project displays all info, roadmap, terms offered
// form to deposit funds

import ProjectCard from "../../components/projects/ProjectCard";
import ProgressBar from "../../components/projects/ProgressBar";
import Roadmap from "../../components/projects/Roadmap";

function SelectedProjectPage() {
  return (
    <div>
      <h1>this is the Selected Project Page</h1>
      <ProgressBar />
      <ProjectCard />
      <Roadmap />
    </div>
  );
}

export default SelectedProjectPage;
