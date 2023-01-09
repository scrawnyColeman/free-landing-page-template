import React from "react";

type Props = {
  children: React.ReactNode;
};

const SectionHeader: React.FC<Props> = ({ children }) => (
  <h2 className="dark-gradient-text my-8 mx-auto text-center text-4xl font-bold leading-normal sm:text-6xl">
    {children}
  </h2>
);

export default SectionHeader;
