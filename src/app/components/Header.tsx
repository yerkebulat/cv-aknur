import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { ResumeData, ResumeLabels } from "@/data/resume-data";

interface LocationLinkProps {
  location: ResumeData["location"];
  locationLink: ResumeData["locationLink"];
  labels: ResumeLabels;
}

function LocationLink({ location, locationLink, labels }: LocationLinkProps) {
  return (
    <p className="max-w-md items-center text-pretty font-mono text-xs text-foreground">
      <a
        className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
        href={locationLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${labels.location}: ${location}`}
      >
        <GlobeIcon className="size-3" aria-hidden="true" />
        {location}
      </a>
    </p>
  );
}

interface SocialButtonProps {
  href: string;
  icon: React.ElementType;
  label: string;
}

function SocialButton({ href, icon: Icon, label }: SocialButtonProps) {
  return (
    <Button className="size-8" variant="outline" size="icon" asChild>
      <a
        href={href}
        aria-label={label}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon className="size-4" aria-hidden="true" />
      </a>
    </Button>
  );
}

interface ContactButtonsProps {
  contact: ResumeData["contact"];
  personalWebsiteUrl?: string;
  labels: ResumeLabels;
}

function ContactButtons({
  contact,
  personalWebsiteUrl,
  labels,
}: ContactButtonsProps) {
  return (
    <div
      className="flex gap-x-1 pt-1 font-mono text-sm text-foreground/80 print:hidden"
      role="list"
      aria-label={labels.contactLinks}
    >
      {personalWebsiteUrl && (
        <SocialButton
          href={personalWebsiteUrl}
          icon={GlobeIcon}
          label={labels.personalWebsite}
        />
      )}
      {contact.email && (
        <SocialButton
          href={`mailto:${contact.email}`}
          icon={MailIcon}
          label={labels.email}
        />
      )}
      {contact.tel && (
        <SocialButton
          href={`tel:${contact.tel}`}
          icon={PhoneIcon}
          label={labels.phone}
        />
      )}
      {contact.social.map((social) => (
        <SocialButton
          key={social.name}
          href={social.url}
          icon={social.icon}
          label={social.name}
        />
      ))}
    </div>
  );
}

interface PrintContactProps {
  contact: ResumeData["contact"];
  personalWebsiteUrl?: string;
  labels: ResumeLabels;
}

function PrintContact({
  contact,
  personalWebsiteUrl,
  labels,
}: PrintContactProps) {
  return (
    <div
      className="hidden gap-x-2 font-mono text-sm text-foreground/80 print:flex print:text-[12px]"
      aria-label={labels.contactLinks}
    >
      {personalWebsiteUrl && (
        <>
          <a
            className="underline hover:text-foreground/70"
            href={personalWebsiteUrl}
          >
            {new URL(personalWebsiteUrl).hostname}
          </a>
          <span aria-hidden="true">/</span>
        </>
      )}
      {contact.email && (
        <>
          <a
            className="underline hover:text-foreground/70"
            href={`mailto:${contact.email}`}
          >
            {contact.email}
          </a>
          <span aria-hidden="true">/</span>
        </>
      )}
      {contact.tel && (
        <a
          className="underline hover:text-foreground/70"
          href={`tel:${contact.tel}`}
        >
          {contact.tel}
        </a>
      )}
    </div>
  );
}

/**
 * Header component displaying personal information and contact details
 */
interface HeaderProps {
  resume: ResumeData;
  labels: ResumeLabels;
}

export function Header({ resume, labels }: HeaderProps) {
  return (
    <header className="flex flex-col-reverse items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex-1 space-y-1.5">
        <h1 className="text-2xl font-bold" id="resume-name">
          {resume.name}
        </h1>
        <p
          className="max-w-md text-pretty font-mono text-sm text-foreground/80 print:text-[12px]"
          aria-labelledby="resume-name"
        >
          {resume.about}
        </p>

        <LocationLink
          location={resume.location}
          locationLink={resume.locationLink}
          labels={labels}
        />

        <ContactButtons
          contact={resume.contact}
          personalWebsiteUrl={resume.personalWebsiteUrl}
          labels={labels}
        />

        <PrintContact
          contact={resume.contact}
          personalWebsiteUrl={resume.personalWebsiteUrl}
          labels={labels}
        />
      </div>

      <Avatar className="size-24 shrink-0 sm:size-36" aria-hidden="true">
        {resume.avatarUrl ? (
          <AvatarImage
            alt={`${resume.name} ${labels.profilePicture}`}
            className="object-cover"
            src={
              resume.avatarUrl.startsWith("http")
                ? resume.avatarUrl
                : `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${resume.avatarUrl}`
            }
          />
        ) : null}
        <AvatarFallback>{resume.initials}</AvatarFallback>
      </Avatar>
    </header>
  );
}
