import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import type { ResumeData, ResumeLabels } from "@/data/resume-data";

type Education = ResumeData["education"][number];

interface EducationPeriodProps {
  start: Education["start"];
  end: Education["end"];
  labels: ResumeLabels;
}

/**
 * Displays the education period in a consistent format
 */
function EducationPeriod({ start, end, labels }: EducationPeriodProps) {
  return (
    <div
      className="shrink-0 whitespace-nowrap text-sm tabular-nums text-gray-500"
      aria-label={`${labels.period}: ${start} ${labels.to} ${end}`}
    >
      {start} - {end}
    </div>
  );
}

interface EducationItemProps {
  education: Education;
  labels: ResumeLabels;
}

/**
 * Individual education card component
 */
function EducationItem({ education, labels }: EducationItemProps) {
  const { school, start, end, degree } = education;

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-1 text-base">
          <h3
            className="font-semibold leading-none"
            id={`education-${school.toLowerCase().replace(/\s+/g, "-")}`}
          >
            {school}
          </h3>
          <EducationPeriod start={start} end={end} labels={labels} />
        </div>
      </CardHeader>
      <CardContent
        className="mt-2 text-foreground/80 print:text-[12px]"
        aria-labelledby={`education-${school
          .toLowerCase()
          .replace(/\s+/g, "-")}`}
      >
        {degree}
      </CardContent>
    </Card>
  );
}

interface EducationListProps {
  education: readonly Education[];
  labels: ResumeLabels;
}

/**
 * Main education section component
 * Renders a list of education experiences
 */
export function Education({ education, labels }: EducationListProps) {
  return (
    <Section>
      <h2 className="text-xl font-bold" id="education-section">
        {labels.sections.education}
      </h2>
      <div
        className="space-y-4"
        role="feed"
        aria-labelledby="education-section"
      >
        {education.map((item) => (
          <article key={item.school} role="article">
            <EducationItem education={item} labels={labels} />
          </article>
        ))}
      </div>
    </Section>
  );
}
