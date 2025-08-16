import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
  const links = [
    { name: "Find Jobs", url: "/find-jobs" },
    { name: "Find Talent", url: "/find-talent" },
    { name: "Post Jobs", url: "/post-jobs" },
    { name: "Posted Jobs", url: "/posted-jobs/0" },
    { name: "Job History", url: "/job-history" },
  ];
  const location = useLocation();
  return (
    <div className="flex gap-5 text-[##d1d1d1] mt-2 h-full  items-center">
      {links.map((link, index) => (
        <div
          key={link.name}
          className={`${
            location.pathname === link.url
              ? "border-t-[#ffbd20] text-[#ffbd20]"
              : "border-transparent"
          } border-t-[3px] h-full flex items-center`}
        >
          <Link key={index} to={link.url}>
            {link.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NavLinks;
