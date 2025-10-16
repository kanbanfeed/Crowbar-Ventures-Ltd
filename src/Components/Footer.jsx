import React from 'react';

// Import images at the top using ES6 imports
import linkedinLogo from "../assets/linkedinlogo.webp";
import xLogo from "../assets/x.webp";
import instagramLogo from "../assets/instagramlogo.png";
import tiktokLogo from "../assets/tiktok.png";
import whatsappLogo from "../assets/whatsapplogo.png";

const socialIcons = {
  linkedin: {
    src: linkedinLogo,
    href: "https://www.linkedin.com/company/crowbar-limited/",
    alt: "LinkedIn"
  },
  x: { src: xLogo, href: "#", alt: "X" },
  instagram: { src: instagramLogo, href: "#", alt: "Instagram" },
  tiktok: { src: tiktokLogo, href: "#", alt: "TikTok" },
  whatsapp: { src: whatsappLogo, href: "#", alt: "WhatsApp" },
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-6 mt-10 text-left">
      <div className="w-full flex flex-col md:flex-row justify-between gap-12">
        <div>
          <h3 className="text-xl font-bold mb-4">Crowbar Ventures Ltd</h3>
          <p>Company No: 16426727</p>
          <address className="not-italic">
            71–75 Shelton Street, Covent Garden,<br />
            London, WC2H 9JQ, United Kingdom
          </address>
          <p>
            Email:
            <a href="mailto:info@crowbarltd.com" className="text-[#d4af37] hover:underline ml-1">
              info@crowbarltd.com
            </a>
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Connect with us</h4>
          <div className="flex justify-start mt-2 space-x-4">
            {Object.values(socialIcons).map(icon => (
              <a href={icon.href} key={icon.alt} target="_blank" rel="noopener noreferrer">
                <img src={icon.src} alt={icon.alt + " logo"} className='w-10 h-10 cursor-pointer' />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-600 pt-4 text-center text-sm">
        <p>© {new Date().getFullYear()} Crowbar Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;
