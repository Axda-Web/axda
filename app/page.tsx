"use client";

import Layout from "./components/layout";
import Image from "next/image";
import profilePic from "../public/images/profile/hero-pic.png";
import AnimatedText from "./components/animated-text";
import Link from "next/link";
import { LinkArrow } from "./components/icons/Icons";
// import HireMe from "./components/hire-me";
import TransitionEffect from "./components/transition-effect";

export default function Home() {
  return (
    <>
      <TransitionEffect />
      <main className="flex text-dark dark:text-light w-full min-h-screen items-center">
        <Layout className="pt-0 md:p-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col sm:gap-y-10">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="Axda"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-6xl text-left xl:!text-5xl lg:!text-center lg:!text-6xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                As a skilled Front-End developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/resume__alyx-darenne.pdf"
                  target={"_blank"}
                  download={true}
                  className="flex items-center bg-primary text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-primary hover:border-primary hover:dark:bg-dark border-2 border-solid border-transparent md:p-2 md:px-4 md:text-base transition-colors"
                >
                  Resume
                  <LinkArrow className="w-6 ml-1" />
                </Link>
                <Link
                  href="mailto:darenne.alyx@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-primary underline md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        {/* <HireMe /> */}
      </main>
    </>
  );
}