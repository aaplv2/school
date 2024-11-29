import Link from "next/link";

import { FaInstagram, FaYoutube, FaTiktok, FaSpotify } from "react-icons/fa";

const socials = [
  { icon: <FaInstagram />, path: "" },
  { icon: <FaYoutube />, path: "" },
  { icon: <FaTiktok />, path: "" },
  { icon: <FaSpotify />, path: "" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
