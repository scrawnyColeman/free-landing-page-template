import Image from "next/image";
import React from "react";
import SectionHeader from "./SectionHeader";

const Testimonials = () => (
  <section id="testimonials" className="container mx-auto mb-16">
    <SectionHeader>Hear what our clients are saying</SectionHeader>
    <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:py-16 lg:px-6">
      <figure className="mx-auto max-w-screen-md">
        <blockquote>
          <p className="text-2xl font-medium leading-normal">
            "Fantastic service. I'm in the shape of my life and I have Arbitrary
            Coaching Name (sorry. I couldn't think of a name 😬) to thank for
            it"
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
            <div className="pr-3 font-medium ">John S</div>
          </div>
        </figcaption>
      </figure>
    </div>
  </section>
);

export default Testimonials;
