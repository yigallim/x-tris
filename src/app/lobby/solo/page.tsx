import React from "react";
import Link from "next/link";
import LinkWrapper from "../components/link-wrapper";

const Page = () => {
  return (
    <LinkWrapper>
      <Link
        href="/lobby/solo/zen"
        className="glass-container bg-pink-300/20 border-pink-400/15 pl-8 lighten"
      >
        <img className="h-[80%] w-64" src="/img/solo_opt_1.svg" alt="" />
        <div className="mb-4 -ml-6 font-semibold">
          <h3 className="text-5xl text-pink-300">ZEN</h3>
          <p className="text-xl text-pink-300/35 font-medium">
            RELAX OR TRAIN IN THIS NEVERENDING MODE
          </p>
        </div>
      </Link>
      <Link
        href="/lobby/solo/40lines"
        className="glass-container bg-amber-300/20 border-amber-400/15 pl-8 lighten"
      >
        <img className="h-[80%] w-64" src="/img/solo_opt_2.svg" alt="" />
        <div className="mb-4 -ml-6 font-semibold">
          <h3 className="text-5xl text-amber-300">40 LINES</h3>
          <p className="text-xl text-amber-300/35 font-medium">
            COMPLETE 40 LINES AS QUICKLY AS POSSIBLE
          </p>
        </div>
      </Link>
    </LinkWrapper>
  );
};

export default Page;
