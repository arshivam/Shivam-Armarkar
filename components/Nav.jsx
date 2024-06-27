"use client";
import Link from "next/link";
import React from "react";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
const Links = [
  { path: "/", name: "home" },
  { path: "/projects", name: "my projects" },
  { path: "/contact", name: "contact" },
];

function Nav({ containerStyles, linkStyles, underlineStyles }) {
  const path = usePathname()
  return (
    <nav className={`${containerStyles}`}>
      {Links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`capitalize ${linkStyles}`}
          >
            {link.path === path && (
              <motion.span
              initial={{y: '-100%'}}
              animate={{y: 0}}
              transition={{type : 'tween'}}
              layoutId='underline'
              className={`${underlineStyles}`}
              />
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}

export default Nav;
