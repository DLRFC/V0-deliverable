// individual investor dashboard displays cards of associated projects
// tracks roadmap progress, funds distributed/pending

import InvestorDashboard from "../../components/layout/BuilderDashboard";
import ProjectCard from "../../components/projects/ProjectCard";

function SelectedInvestorPage() {
  return (
    <div>
      <h1>this is the Selected Investor Page</h1>
      <InvestorDashboard />
      <ProjectCard />
    </div>
  );
}

export default SelectedInvestorPage;
