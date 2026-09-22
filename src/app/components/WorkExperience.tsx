import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import type { ResumeData, ResumeLabels } from "@/data/resume-data";
import { cn } from "@/lib/utils";

type WorkExperience = ResumeData["work"][number];
type WorkBadges = WorkExperience["badges"];

interface BadgeListProps {
  className?: string;
  badges: WorkBadges;
  labels: ResumeLabels;
}

/**
 * Renders a list of badges for work experience
 * Handles both mobile and desktop layouts through className prop
 */
function BadgeList({ className, badges, labels }: BadgeListProps) {
  if (badges.length === 0) return null;

  return (
    <ul
      className={cn("inline-flex list-none gap-x-1 p-0", className)}
      aria-label={labels.tags}
    >
      {badges.map((badge) => (
        <li key={badge}>
          <Badge
            variant="secondary"
            className="align-middle text-xs print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
          >
            {badge}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

interface WorkPeriodProps {
  start: WorkExperience["start"];
  end?: WorkExperience["end"];
  labels: ResumeLabels;
}

/**
 * Displays the work period in a consistent format
 */
function WorkPeriod({ start, end, labels }: WorkPeriodProps) {
  return (
    <div
      className="shrink-0 whitespace-nowrap text-sm tabular-nums text-gray-500"
      aria-label={`${labels.employmentPeriod}: ${start} ${labels.to} ${
        end ?? labels.present
      }`}
    >
      {start} - {end ?? labels.present}
    </div>
  );
}

interface CompanyLinkProps {
  company: WorkExperience["company"];
  link: WorkExperience["link"];
  labels: ResumeLabels;
}

/**
 * Renders company name with optional link
 */
function CompanyLink({ company, link, labels }: CompanyLinkProps) {
  return (
    <a
      className="hover:underline"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${company} ${labels.companyWebsite}`}
    >
      {company}
    </a>
  );
}

interface WorkExperienceItemProps {
  work: WorkExperience;
  labels: ResumeLabels;
}

/**
 * Individual work experience card component
 * Handles responsive layout for badges (mobile/desktop)
 */
function WorkExperienceItem({ work, labels }: WorkExperienceItemProps) {
  const { company, link, badges, title, start, end, description } = work;

  return (
    <Card className="py-1 print:py-0">
      <CardHeader className="print:space-y-1">
        <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-1 text-base">
          <h3 className="inline-flex min-w-0 flex-wrap items-center gap-x-1 font-semibold leading-none print:text-sm">
            <CompanyLink company={company} link={link} labels={labels} />
            <BadgeList
              className="hidden gap-x-1 sm:inline-flex"
              badges={badges}
              labels={labels}
            />
          </h3>
          <WorkPeriod start={start} end={end} labels={labels} />
        </div>

        <h4 className="font-mono text-sm font-semibold leading-none print:text-[12px]">
          {title}
        </h4>
      </CardHeader>

      <CardContent>
        <div className="mt-2 text-pretty text-xs text-foreground/80 print:mt-1 print:text-[10px]">
          {description}
        </div>
        <div className="mt-2">
          <BadgeList
            className="-mx-2 flex-wrap gap-1 sm:hidden"
            badges={badges}
            labels={labels}
          />
        </div>
      </CardContent>
    </Card>
  );
}

interface WorkExperienceProps {
  work: ResumeData["work"];
  labels: ResumeLabels;
}

/**
 * Main work experience section component
 * Renders a list of work experiences in chronological order
 */
export function WorkExperience({ work, labels }: WorkExperienceProps) {
  return (
    <Section>
      <h2 className="text-xl font-bold" id="work-experience">
        {labels.sections.work}
      </h2>
      <div
        className="space-y-4 print:space-y-0"
        role="feed"
        aria-labelledby="work-experience"
      >
        {work.map((item) => (
          <article key={`${item.company}-${item.start}`} role="article">
            <WorkExperienceItem work={item} labels={labels} />
          </article>
        ))}
      </div>
    </Section>
  );
}
