import React from "react";
import { FaFacebook, FaTiktok, FaInstagram } from "react-icons/fa";

const Footer = () => (
  <footer className="container mx-auto py-6">
    <div className="mb-12 flex justify-center space-x-8">
      <a
        rel="noopener noreferrer"
        href="https://instagram.com"
        title="Instagram"
      >
        <FaInstagram className="h-8 w-8 hover:text-lime-200" />
      </a>
      <a rel="noopener noreferrer" href="https://facebook.com" title="Facebook">
        <FaFacebook className="h-8 w-8 hover:text-lime-200" />
      </a>
      <a rel="noopener noreferrer" href="https://tiktok.com" title="Tiktok">
        <FaTiktok className="h-8 w-8 hover:text-lime-200" />
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
);

export default Footer;
