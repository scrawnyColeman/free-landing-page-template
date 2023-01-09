import React from "react";
import SectionHeader from "./SectionHeader";

const Pricing: React.FC = () => (
  <section id="pricing" className="container mx-auto mb-16 px-4">
    <SectionHeader>Pricing</SectionHeader>

    <div className="grid gap-6 lg:grid-cols-3 lg:gap-x-12">
      <Plan
        title="Online Coaching"
        price="£50/month"
        url="https://typeform.com"
      />
      <Plan
        title="Member Site"
        price="£7.50/month"
        url="https://thomashutchinsonwebdev.com"
      />
      <Plan
        title="Consulation (1 Hour)"
        price="Free"
        url="https://calendly.com"
      />
    </div>
  </section>
);

const Plan: React.FC<{ title: string; price: string; url: string }> = ({
  title,
  price,
  url,
}) => (
  <div className="mb-6 rounded-xl border border-lime-200 lg:mb-0">
    <div className="block h-full rounded-lg shadow-lg">
      <div className="p-6 text-center">
        <p className="mb-4 text-sm uppercase">
          <strong>{title}</strong>
        </p>
        <h3 className="mb-6 text-2xl">
          <strong>{price}</strong>
        </h3>
        <a
          className="rounded-full border border-white px-4 py-2 text-sm font-medium text-white  hover:underline"
          href={url}
          role="button"
        >
          Select
        </a>
      </div>
    </div>
  </div>
);

export default Pricing;
