import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import "./sidenav.scss";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import SettingsIcon from "@mui/icons-material/Settings";
import ArticleIcon from "@mui/icons-material/Article";
import BarChartIcon from "@mui/icons-material/BarChart";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import Person2Icon from "@mui/icons-material/Person2";

const SideNav = () => {
  const navItems = [
    {
      icon: <ImportContactsIcon fontSize="small" />,
      name: "Overview",
      route: "/overview",
    },
    {
      icon: <BarChartIcon fontSize="small" />,
      name: "Stocks",
      route: "/stocks",
    },
    {
      icon: <CurrencyBitcoinIcon fontSize="small" />,
      name: "Crypto",
      route: "/crypto",
    },
    {
      icon: <ArticleIcon fontSize="small" />,
      name: "Articles",
      route: "/articles",
    },
  ];

  const pageItems = [
    {
      icon: <Person2Icon />,
      name: "Profile",
      route: "/profile",
    },
    {
      icon: <SettingsIcon fontSize="small" />,
      name: "Settings",
      route: "settings",
    },
    {
      icon: <AddIcon fontSize="small" />,
      name: "Add Page",
    },
  ];
  return (
    <section id="sidebar">
      <h1>StockWise</h1>
      <nav>
        <div className="navTitle">
          <HomeIcon />
          <h3>Dashboard</h3>
        </div>
        <ul>
          {navItems.map((item) => {
            return (
              <li key={item.name} className="navItems">
                <Link to={item.route}>
                  {item.icon}
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="navTitle">
          <HomeIcon />
          <h3>Pages</h3>
        </div>
        <ul>
          {pageItems.map((item) => {
            return (
              <li key={item.name} className="navItems">
                <Link to={item.route}>
                  {item.icon}
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </section>
  );
};

export default SideNav;
