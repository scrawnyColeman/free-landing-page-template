import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => (
  <>
    <header>
      <section className="mb-16 overflow-hidden">
        <div
          className="relative h-[800px] overflow-hidden bg-cover bg-no-repeat"
          style={{
            backgroundPosition: "50%",
            backgroundImage: "url(/bg.jpg)",
          }}
        >
          <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-black bg-opacity-75 bg-fixed">
            <div className="flex h-full items-center justify-center">
              <div className="px-6 text-center text-white md:px-12">
                <h1 className="light-gradient-text mb-12 text-6xl font-bold leading-normal sm:text-7xl">
                  Level Up Your <br />
                  <span className="leading-normal">
                    Online Coaching Business
                  </span>
                </h1>
                <a
                  className="text-md rounded-full border-2 border-white px-8 py-4 font-medium text-white hover:underline"
                  href="/freebie.zip"
                  role="button"
                  download="/freebie.zip"
                >
                  Claim
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

    <section id="testimonials" className="container mx-auto mb-16 px-4">
      <h2 className="dark-gradient-text my-8 mx-auto text-center text-4xl font-bold leading-normal sm:text-6xl">
        Hear what our clients are saying
      </h2>

      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:py-16 lg:px-6">
        <figure className="mx-auto max-w-screen-md">
          <blockquote>
            <p className="text-2xl font-medium leading-normal">
              &quot;Fantastic service. I&apos;m in the shape of my life and I
              have Arbitrary Coaching Name (sorry. I couldn&apos;t think of a
              name 😬) to thank for it&quot;
            </p>
          </blockquote>
          <figcaption className="mt-6 flex items-center justify-center">
            <div className="relative h-[64px] w-[64px] overflow-hidden rounded-3xl">
              <div className="absolute top-0 bottom-0 right-0 left-0">
                <Image
                  className="h-auto min-h-full w-auto min-w-full object-cover"
                  src="/avatar.jpg"
                  alt="profile picture"
                  width={64}
                  height={64}
                />
              </div>
            </div>
            <div className="flex items-center">
              <div className="ml-3 pr-3 font-medium">John S</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>

    <section id="pricing" className="container mx-auto mb-16 px-4">
      <h2 className="dark-gradient-text my-8 mx-auto text-center text-4xl font-bold leading-normal sm:text-6xl">
        Pricing
      </h2>

      <div className="grid gap-6 lg:grid-cols-3 lg:gap-x-12">
        <div className="mb-6 rounded-xl border border-lime-200 lg:mb-0">
          <div className="block h-full rounded-lg shadow-lg">
            <div className="p-6 text-center">
              <p className="mb-4 text-sm uppercase">
                <strong>Online Coaching</strong>
              </p>
              <h3 className="mb-6 text-2xl">
                <strong>£50 / month</strong>
              </h3>
              <a
                className="rounded-full border border-white px-4 py-2 text-sm font-medium text-white hover:underline"
                href="https://typeform.com"
                role="button"
              >
                Select
              </a>
            </div>
          </div>
        </div>

        <div className="mb-6 rounded-xl border border-lime-200 lg:mb-0">
          <div className="block h-full rounded-lg shadow-lg">
            <div className="p-6 text-center">
              <p className="mb-4 text-sm uppercase">
                <strong>Member Site</strong>
              </p>
              <h3 className="mb-6 text-2xl">
                <strong>£7.99 / month</strong>
              </h3>
              <a
                className="rounded-full border border-white px-4 py-2 text-sm font-medium text-white hover:underline"
                href="https://thomashutchinsonweb.dev"
                role="button"
              >
                Select
              </a>
            </div>
          </div>
        </div>

        <div className="mb-6 rounded-xl border border-lime-200 lg:mb-0">
          <div className="block h-full rounded-lg shadow-lg">
            <div className="p-6 text-center">
              <p className="mb-4 text-sm uppercase">
                <strong>Consultation (1 hour)</strong>
              </p>
              <h3 className="mb-6 text-2xl">
                <strong>Free</strong>
              </h3>
              <a
                className="rounded-full border border-white px-4 py-2 text-sm font-medium text-white hover:underline"
                href="https://calendly.com"
                role="button"
              >
                Select
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer className="container mx-auto py-6">
      <div className="mb-12 flex justify-center space-x-8">
        <a
          rel="noopener noreferrer"
          href="https://instagram.com"
          title="Instagram"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 448 512"
            className="h-8 w-8 hover:text-lime-200"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
          </svg>
        </a>
        <a
          rel="noopener noreferrer"
          href="https://facebook.com"
          title="Facebook"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            className="h-8 w-8 hover:text-lime-200"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
          </svg>
        </a>
        <a rel="noopener noreferrer" href="https://tiktok.com" title="Tiktok">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 448 512"
            className="h-8 w-8 hover:text-lime-200"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path>
          </svg>
        </a>
      </div>
      <div className="flex w-full justify-center">
        <a
          href="https://thomashutchinsonwebdev.vercel.app"
          className="light-gradient-text mx-auto text-center text-lg"
        >
          Get your own site
        </a>
      </div>
    </footer>
  </>
);

export default Home;
