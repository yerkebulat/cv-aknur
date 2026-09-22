import { Metadata } from "next";
import { RESUME_DATA } from "@/data/resume-data";
import { ResumeContent } from "./components/ResumeContent";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} - Resume`,
  description: RESUME_DATA.about,
  openGraph: {
    title: `${RESUME_DATA.name} - Resume`,
    description: RESUME_DATA.about,
    type: "profile",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: `${RESUME_DATA.name} - Resume`,
    description: RESUME_DATA.about,
  },
};

export default function ResumePage() {
  return <ResumeContent />;
}
