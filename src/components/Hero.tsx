import React from "react";

const Hero: React.FC = () => (
  <header>
    <section className="mb-16 overflow-hidden">
      <div
        className="relative h-screen overflow-hidden bg-cover bg-no-repeat"
        style={{
          backgroundPosition: "50%",
          backgroundImage: "url('/bg.jpg')",
        }}
      >
        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-black bg-opacity-75 bg-fixed">
          <div className="flex h-full items-center justify-center">
            <div className="px-6 text-center text-white md:px-12">
              <h1 className="light-gradient-text mb-12 text-6xl font-bold leading-normal  sm:text-7xl">
                Level Up Your <br />
                <span className="leading-normal">Online Coaching Business</span>
              </h1>
              <a
                className="text-md rounded-full border-2 border-white px-8 py-4 font-medium text-white  hover:underline"
                href="https://thomashutchinsonwebdev.vercel.app"
                role="button"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="-mt-2.5 md:-mt-4 lg:-mt-6 xl:-mt-10"
        style={{
          height: "50px",
          transform: "scale(2)",
          transformOrigin: "top center",
          color: "#1b1b1b",
        }}
      >
        <svg viewBox="0 0 2880 48" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 0 48 L 1437.5 48 L 2880 48 L 2880 0 L 2160 0 C 1453.324 60.118 726.013 4.51 720 0 L 0 0 L 0 48 Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </section>
  </header>
);

export default Hero;
