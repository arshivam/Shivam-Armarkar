import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"}>
      {" "}
      <div className="font-bold font-serif text-3xl">
        <span>Shiv</span>
        <span className="text-primary">Ar</span>
        <span className="text-green-400">.</span>
      </div>
    </Link>
  );
};

export default Logo;
