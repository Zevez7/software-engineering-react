import React from "react";
import "./navigation.css";
import { useLocation, Link } from "react-router-dom";
import {
  Home,
  Tag,
  Notifications,
  Email,
  Bookmark,
  List,
  Person,
  AssignmentInd,
  MoreHoriz,
  AddBox,
} from "@mui/icons-material/";

function Navigation() {
  const { pathname } = useLocation();
  const links = [
    { label: "Tuiter", icon: <AddBox />, path: "/tuiter" },
    { label: "Home", icon: <Home />, path: "/home" },
    { label: "Explore", icon: <Tag />, path: "/explore" },
    {
      label: "Notifications",
      icon: <Notifications />,
      path: "/notifications",
    },
    { label: "Messages", icon: <Email />, path: "/messages" },
    { label: "Bookmarks", icon: <Bookmark />, path: "/bookmarks" },
    { label: "Lists", icon: <List />, path: "/lists" },
    { label: "Profile", icon: <Person />, path: "/profile" },
    { label: "Signup", icon: <AssignmentInd />, path: "/signup" },
    { label: "More", icon: <MoreHoriz />, path: "/more" },
  ];
  return (
    <div className="ttr-navigation">
      <ul className="list-group">
        {links.map((link, ndx) => {
          return (
            <li
              key={ndx}
              className={`list-group-item border-0 ttr-font-size-150pc text-nowrap
         ${pathname.indexOf(link.path) >= 0 ? "fw-bold" : ""}`}
            >
              <Link
                to={link.path}
                id={link.label}
                className="text-decoration-none text-black"
              >
                {link.icon}
                <span className="ttr-label">{link.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
      <a
        href="#"
        className="mt-3 btn btn-lg btn-primary rounded-pill w-100 fw-bold text-white"
      >
        Tuit
      </a>
    </div>
  );
}

export default Navigation;
