"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const Nav = () => {
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/SVG/logo2.svg"
          alt="logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text blue_gradient">convert</p>
      </Link>

      <div className="flex">
        <div className="flex gap-3 md:gap-5">
          <Link href="/" className="black_btn flex gap-2 felx-center">
            <Image
              src="/SVG/github-mark-white.svg"
              alt="github-lgo"
              width={20}
              height={20}
              className="object-contain"
            />
            <p className="">Github</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
