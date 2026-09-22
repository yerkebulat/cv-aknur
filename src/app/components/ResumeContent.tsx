"use client";

import { useEffect, useMemo, useState } from "react";
import { LanguagesIcon } from "lucide-react";
import { CommandMenu } from "@/components/command-menu";
import { Button } from "@/components/ui/button";
import {
  LANGUAGE_ORDER,
  LOCALIZED_RESUME_DATA,
  RESUME_LABELS,
  type ResumeData,
  type ResumeLabels,
  type ResumeLanguage,
} from "@/data/resume-data";
import { Awards } from "./Awards";
import { Education } from "./Education";
import { Header } from "./Header";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { WorkExperience } from "./WorkExperience";

function getNextLanguage(language: ResumeLanguage) {
  const currentIndex = LANGUAGE_ORDER.indexOf(language);
  return LANGUAGE_ORDER[(currentIndex + 1) % LANGUAGE_ORDER.length];
}

function getCommandMenuLinks(resume: ResumeData, labels: ResumeLabels) {
  const links = [];

  if (resume.personalWebsiteUrl) {
    links.push({
      url: resume.personalWebsiteUrl,
      title: labels.personalWebsite,
    });
  }

  if (resume.contact.email) {
    links.push({
      url: `mailto:${resume.contact.email}`,
      title: labels.email,
    });
  }

  if (resume.contact.tel) {
    links.push({
      url: `tel:${resume.contact.tel}`,
      title: labels.phone,
    });
  }

  return [
    ...links,
    ...resume.contact.social.map((socialMediaLink) => ({
      url: socialMediaLink.url,
      title: socialMediaLink.name,
    })),
  ];
}

export function ResumeContent() {
  const [language, setLanguage] = useState<ResumeLanguage>("en");
  const resume = LOCALIZED_RESUME_DATA[language];
  const labels = RESUME_LABELS[language];
  const nextLanguage = getNextLanguage(language);
  const nextLanguageLabel = RESUME_LABELS[nextLanguage].languageName;

  const commandMenuLinks = useMemo(
    () => getCommandMenuLinks(resume, labels),
    [resume, labels],
  );

  useEffect(() => {
    document.documentElement.lang = labels.htmlLang;
    document
      .querySelector('meta[http-equiv="Content-Language"]')
      ?.setAttribute("content", labels.htmlLang);
  }, [labels.htmlLang]);

  return (
    <main
      className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-11 md:p-16"
      id="main-content"
    >
      <div className="sr-only">
        <h1>
          {resume.name} - {labels.resumeTitle}
        </h1>
      </div>

      <section
        className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4"
        aria-label={labels.resumeTitle}
      >
        <div className="flex justify-end print:hidden">
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="gap-2 bg-white"
            onClick={() => setLanguage(nextLanguage)}
            aria-label={`${labels.switchToLanguage} ${nextLanguageLabel}`}
          >
            <LanguagesIcon className="size-4" aria-hidden="true" />
            <span>{nextLanguageLabel}</span>
          </Button>
        </div>

        <Header resume={resume} labels={labels} />

        <div className="space-y-8 print:space-y-4">
          <WorkExperience work={resume.work} labels={labels} />

          <Education education={resume.education} labels={labels} />

          <Skills skills={resume.skills} labels={labels} />

          <Awards awards={resume.awards} labels={labels} />

          <Projects projects={resume.projects} labels={labels} />
        </div>
      </section>

      <nav className="print:hidden" aria-label={labels.commandMenu.buttonLabel}>
        <CommandMenu links={commandMenuLinks} labels={labels.commandMenu} />
      </nav>
    </main>
  );
}
