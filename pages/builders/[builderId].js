// dashboard for builders to manage projects / update progress

import BuilderDashboard from "../../components/layout/BuilderDashboard";
import ProjectCard from "../../components/projects/ProjectCard";

function SelectedBuilderPage() {
  return (
    <div>
      <h1>this is the Selected Builder Page</h1>
      <BuilderDashboard />
      <ProjectCard />
    </div>
  );
}

export default SelectedBuilderPage;
