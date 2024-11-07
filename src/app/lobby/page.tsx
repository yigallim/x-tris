"use client";
import Link from "next/link";
import React from "react";
import LinkWrapper from "./components/link-wrapper";

const Lobby = () => {
  return (
    <LinkWrapper>
      <Link
        href="/lobby/multiplayer"
        className="glass-container bg-purple-300/20 border-purple-400/15 pl-8 lighten"
      >
        <img className="h-[80%] w-64" src="/img/lobby_opt_1.svg" alt="" />
        <div className="mb-5 -ml-6 font-semibold">
          <h3 className="text-5xl text-fuchsia-300">MULTIPLAYER</h3>
          <p className="text-xl text-fuchsia-300/35 font-medium">
            PLAY ONLINE WITH FRIEND AND FOES
          </p>
        </div>
      </Link>
      <Link
        href="/lobby/solo"
        className="glass-container bg-indigo-300/20 border-indigo-400/15 pl-8 lighten"
      >
        <img className="h-[80%] w-64" src="/img/lobby_opt_2.svg" alt="" />
        <div className="mb-5 -ml-6 font-semibold">
          <h3 className="text-5xl text-indigo-300">SOLO</h3>
          <p className="text-xl text-indigo-300/35 font-medium">
            CHALLENGE YOURSELF AND THE LIMITS
          </p>
        </div>
      </Link>
      <Link
        href="/lobby/config"
        className="glass-container bg-sky-300/20 border-sky-400/15 pl-8 lighten"
      >
        <img className="h-[80%] w-64" src="/img/lobby_opt_3.svg" alt="" />
        <div className="mb-5 -ml-6 font-semibold">
          <h3 className="text-5xl text-sky-300">CONFIG</h3>
          <p className="text-xl text-sky-300/35 font-medium">TWEAK YOUR TRIS EXPERIENCE</p>
        </div>
      </Link>
    </LinkWrapper>
  );
};

export default Lobby;
