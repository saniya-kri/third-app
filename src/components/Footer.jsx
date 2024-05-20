import React from "react";
import { resourcesLinks, platformLinks, communityLinks } from "../constant";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-neutral-700 pb-20 pt-10 ml-10">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4" >
        <div>
          <h3 className="text-md font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a className="text-neutral-300 hover:text-white" href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Platform</h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a className="text-neutral-300 hover:text-white" href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a className="text-neutral-300 hover:text-white" href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
       <center className="bg-neutral-300 py-4 mt-3"><em>&copy;This site is made by Anjali.. 2024</em></center>
    </footer>
  );
};

export default Footer;
