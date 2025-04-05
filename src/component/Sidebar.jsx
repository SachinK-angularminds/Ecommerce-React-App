import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar h-100">
      <div className="pt-5">
        <hr />
      </div>
      <div className="mx-3">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "sidebar-link active-link" : "sidebar-link"
          }
        >
          All categories
        </NavLink>

        <div className="px-3 py-3">
          <p className="py-3">
            <NavLink
              to="/men's clothing"
              className={({ isActive }) =>
                isActive ? "sidebar-link active-link" : "sidebar-link"
              }
            >
              Men's Clothing
            </NavLink>
          </p>
          <p className="py-3">
            <NavLink
              to="/women's clothing"
              className={({ isActive }) =>
                isActive ? "sidebar-link active-link" : "sidebar-link"
              }
            >
              Women's Clothing
            </NavLink>
          </p>
          <p className="py-3">
            <NavLink
              to="/jewelery"
              className={({ isActive }) =>
                isActive ? "sidebar-link active-link" : "sidebar-link"
              }
            >
              Jewellery
            </NavLink>
          </p>
          <p className="py-3">
            <NavLink
              to="/electronics"
              className={({ isActive }) =>
                isActive ? "sidebar-link active-link" : "sidebar-link"
              }
            >
              Electronics
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
