import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import type { ResumeData, ResumeLabels } from "@/data/resume-data";

type Award = ResumeData["awards"][number];

interface AwardItemProps {
  award: Award;
}

/**
 * Individual award card component
 */
function AwardItem({ award }: AwardItemProps) {
  const { title, award: awardDescription } = award;

  return (
    <Card>
      <CardHeader>
        <h3 className="text-sm font-semibold leading-none">{title}</h3>
      </CardHeader>
      <CardContent className="mt-1 text-xs text-foreground/80 print:text-[11px]">
        {awardDescription}
      </CardContent>
    </Card>
  );
}

interface AwardsListProps {
  awards: readonly Award[];
  labels: ResumeLabels;
}

/**
 * Main awards section component
 * Renders a list of awards and achievements
 */
export function Awards({ awards, labels }: AwardsListProps) {
  if (!awards || awards.length === 0) return null;

  return (
    <Section>
      <h2 className="text-xl font-bold" id="awards-section">
        {labels.sections.awards}
      </h2>
      <div
        className="grid grid-cols-1 gap-3 print:grid-cols-2 print:gap-2 md:grid-cols-2"
        role="feed"
        aria-labelledby="awards-section"
      >
        {awards.map((item) => (
          <article key={`${item.title}-${item.award}`} role="article">
            <AwardItem award={item} />
          </article>
        ))}
      </div>
    </Section>
  );
}
