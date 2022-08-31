import Link from "next/link";

function ProjectCard() {
  return (
    <div>
      <h1>this is a Project Card</h1>
      <Link href="/projects/id">View this Project</Link>
    </div>
  );
}

export default ProjectCard;
