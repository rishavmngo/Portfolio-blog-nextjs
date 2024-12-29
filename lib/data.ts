import dirfPreview from "@/public/dirf_preview.png";
import medspherePreview from "@/public/medsphere_preview.png";
import timerPreview from "@/public/forest_preview.png";
import typeTestPreview from "@/public/typetest_preview.png";
import chatterPreview from "@/public/chatter_Preview.png";
import { FaGithub, FaTwitter } from "react-icons/fa";
export const projects = [
  {
    projectNumber: 1,
    title: "Medsphere",
    description: "A webapp to manage medical organisation",
    tags: ["React js", "Express js", "Postgres"],
    repoLink: "https://github.com/rishavmngo/Medsphere",
    image: medspherePreview,
  },

  {
    projectNumber: 2,
    title: "Dirf",
    description:
      "Dirf is simple command line utility to make multiple,nested, recursive directory and files inside them",
    tags: ["golang"],
    repoLink: "https://github.com/rishavmngo/dirf2.0",
    image: dirfPreview,
  },
  {
    projectNumber: 3,
    title: "Forest clone",
    description: "A Clone of forest app in flutter and supabase",
    tags: ["flutter", "supabase", "Riverpod"],
    repoLink: "https://github.com/rishavmngo/Timer-app",
    image: timerPreview,
  },

  {
    projectNumber: 4,
    title: "Type test cli",
    description:
      "A simple type test cli with test customization with result tracker",
    tags: ["golang"],
    repoLink: "https://github.com/rishavmngo/typeTestCli",
    image: typeTestPreview,
  },

  {
    projectNumber: 5,
    title: "Event based Chat system",
    description:
      "A event based chat backend written in golang , websocket and postgres",
    tags: ["golang", "webSocket", "postgres"],
    repoLink: "https://github.com/rishavmngo/chatter-backend",
    image: chatterPreview,
  },
] as const;

export const socials = [
  {
    name: "twitter",
    url: "https://www.twitter.com/rishavmngo",
    icon: FaTwitter,
  },
  {
    name: "github",
    url: "https://www.github.com/rishavmngo",
    icon: FaGithub,
  },
] as const;
