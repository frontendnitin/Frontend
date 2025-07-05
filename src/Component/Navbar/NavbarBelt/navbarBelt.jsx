import React from "react";
import "./navbarBelt.css";
import amazonLogo from "../../../assets/amazonLogo.png";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";

const NavbarBelt = () => {
  return (
    <div className="navbarBelt">
      <div className="leftNavBelt">
        <div className="leftNavBeltLogo">
          <img className="amazonLogoNavbar" src={amazonLogo} alt="amazonLogo" />
          <span className="navbar_inLogo">.in</span>
        </div>
        <div className="navBeltLocation">
          <div className="navBeltLocation_icon">
            <PlaceOutlinedIcon fontSize="small" />
          </div>
          <div className="navBeltLocationPlace">
            <div className="navBeltLocation_Top">
              Delivering to Delhi 110084
            </div>
            <div className="navBeltLocation_Bottom">Update Location</div>
          </div>
        </div>
      </div>
      <div className="navbarBeltSearchBox">
        <div className="navbarBeltSearchDiv">
          <div className="navbarBeltDropdown">
            <div className="navbarBeltDropdownText">All</div>
            <ArrowDropDownIcon fontSize="small" />
          </div>
          <input
            type="text"
            className="searchInput"
            placeholder="Search Amazon.in"
          />
          <div className="searchIconNavbarBelt">
            <SearchIcon
              sx={{ color: "#0f1111", fontSize: "30px" }}
              className="searchIconNavbarBeltIcon"
            />
          </div>
        </div>
      </div>

      <div className="rightNavBelt">
        <div className="countryLang">
          <div className="flagIcon">
            <img
              src="https://flagcdn.com/w40/in.png"
              alt="India Flag"
              style={{ width: "20px", height: "14px", verticalAlign: "middle" }}
            />
          </div>
          <div className="lang">
            <div className="selectedLang">EN</div>
            <ArrowDropDownIcon
              fontSize="small"
              // style={{ margin: 0, padding: 0 }}
              className="arrowDropdownIcon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarBelt;
