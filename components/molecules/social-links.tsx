"use client";

import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";
import Link from "next/link";

const links = [
  {
    name: "LinkedIn",
    icon: <LinkedinLogo />,
    url: "https://www.linkedin.com/in/gustavo-vasconcellos-15782082/",
  },
  {
    name: "Facebook",
    icon: <FacebookLogo />,
    url: "https://www.facebook.com/premiopm",
  },
  {
    name: "Instagram",
    icon: <InstagramLogo />,
    url: "https://www.instagram.com/premiopm/",
  },
  {
    name: "X",
    icon: <TwitterLogo />,
    url: "https://twitter.com/premiopm",
  },
  {
    name: "YouTube",
    icon: <YoutubeLogo />,
    url: "https://www.youtube.com/channel/UCoBr138u-E4OgOMRMfxOxNg",
  },
];

export default function SocialLinks() {
  return (
    <div className="mx-4 fixed left-0 top-1/2 transform -translate-y-1/2">
      <ul>
        {links.map((link, index: number) => (
          <li
            className="text-secondary text-2xl my-4 hover:opacity-70 transition-all duration-200"
            key={index}
          >
            <Link title={link.name} target="_blank" href={link.url}>
              {link.icon}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
