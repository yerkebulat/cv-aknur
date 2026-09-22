import { Badge } from "../../components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../components/ui/card";
import { Section } from "../../components/ui/section";
import type { ResumeData, ResumeLabels } from "../../data/resume-data";

type ProjectTags = ResumeData["projects"][number]["techStack"];

interface ProjectLinkProps {
  title: string;
  link?: string;
  labels: ResumeLabels;
}

function ProjectLink({ title, link, labels }: ProjectLinkProps) {
  if (!link) {
    return <span>{title}</span>;
  }

  return (
    <>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 hover:underline"
        aria-label={`${title} live site (opens in new tab)`}
      >
        {title}
        <span
          className="size-1 rounded-full bg-green-500"
          aria-label={labels.activeProject}
        />
      </a>
      <div
        className="hidden font-mono text-xs underline print:visible"
        aria-hidden="true"
      >
        {link.replace("https://", "").replace("www.", "").replace(/\/$/, "")}
      </div>
    </>
  );
}

interface ProjectTagsProps {
  tags: ProjectTags;
  labels: ResumeLabels;
}

function ProjectTags({ tags, labels }: ProjectTagsProps) {
  if (tags.length === 0) return null;

  return (
    <ul
      className="mt-2 flex list-none flex-wrap gap-1 p-0"
      aria-label={labels.tags}
    >
      {tags.map((tag) => (
        <li key={tag}>
          <Badge
            className="px-1 py-0 text-[10px] print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
            variant="secondary"
          >
            {tag}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  tags: ProjectTags;
  link?: string;
  github?: string;
  labels: ResumeLabels;
}

function ProjectCard({
  title,
  description,
  tags,
  link,
  github,
  labels,
}: ProjectCardProps) {
  return (
    <Card
      className="flex h-full flex-col overflow-hidden border p-3"
      role="article"
    >
      <CardHeader>
        <div className="space-y-1">
          <CardTitle className="text-base">
            <ProjectLink title={title} link={link} labels={labels} />
          </CardTitle>
          <CardDescription
            className="text-pretty font-mono text-xs print:text-[10px]"
            aria-label={labels.projectDescription}
          >
            {github ? (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                aria-label={`${title} GitHub repository (opens in new tab)`}
              >
                {description}
              </a>
            ) : (
              description
            )}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex">
        <ProjectTags tags={tags} labels={labels} />
      </CardContent>
    </Card>
  );
}

interface ProjectsProps {
  projects: ResumeData["projects"];
  labels: ResumeLabels;
}

export function Projects({ projects, labels }: ProjectsProps) {
  if (!projects || projects.length === 0) return null;

  return (
    <Section className="print-force-new-page scroll-mb-16 print:space-y-4 print:pt-12">
      <h2 className="text-xl font-bold" id="side-projects">
        {labels.sections.projects}
      </h2>
      <div
        className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3"
        role="feed"
        aria-labelledby="side-projects"
      >
        {projects.map((project) => (
          <article key={project.title} className="h-full">
            <ProjectCard
              title={project.title}
              description={project.description}
              tags={project.techStack}
              link={project.link?.href}
              github={project.github?.href}
              labels={labels}
            />
          </article>
        ))}
      </div>
    </Section>
  );
}
