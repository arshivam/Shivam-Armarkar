"use client";
import Link from "next/link";
import React from "react";

import { usePathname } from "next/navigation";

const Links = [
  { path: "/", name: "home" },
  { path: "/projects", name: "my projects" },
  { path: "/contact", name: "contact" },
];

function Nav({ containerStyles, linkStyles, underlineStyles }) {
  return (
    <nav className={`${containerStyles}`}>
      {Links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`capitalize ${linkStyles}`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}

export default Nav;
