import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import type { ResumeData, ResumeLabels } from "@/data/resume-data";
import { cn } from "@/lib/utils";

type Skills = ResumeData["skills"];

interface SkillsListProps {
  skills: Skills;
  className?: string;
  labels: ResumeLabels;
}

/**
 * Renders a list of skills as badges
 */
function SkillsList({ skills, className, labels }: SkillsListProps) {
  return (
    <ul
      className={cn("flex list-none flex-wrap gap-1 p-0", className)}
      aria-label={labels.skillsList}
    >
      {skills.map((skill) => (
        <li key={skill}>
          <Badge
            className="print:text-[10px]"
            aria-label={`${labels.skill}: ${skill}`}
          >
            {skill}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

interface SkillsProps {
  skills: Skills;
  labels: ResumeLabels;
  className?: string;
}

/**
 * Skills section component
 * Displays a list of professional skills as badges
 */
export function Skills({ skills, labels, className }: SkillsProps) {
  return (
    <Section className={className}>
      <h2 className="text-xl font-bold" id="skills-section">
        {labels.sections.skills}
      </h2>
      <SkillsList skills={skills} labels={labels} />
    </Section>
  );
}
