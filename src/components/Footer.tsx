import React from "react";
import { FaFacebook, FaTiktok, FaInstagram } from "react-icons/fa";

const Footer = () => (
  <footer>
    <div className="container mx-auto flex justify-center space-x-8 py-12">
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
  </footer>
);

export default Footer;
