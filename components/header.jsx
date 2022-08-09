import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Logo from "../public/headerLogo.png";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className="headerWrapper">
      <div className="flexContainer">
        <div className="flexbox">
          <div className="hamberger">
            <MenuIcon />
          </div>
          <Link href="/">
            <Image
              className="flipkartLogo"
              src={Logo}
              alt="logo"
              width={140}
              height={38}
            ></Image>
          </Link>
        </div>
        <div className="flexbox headerRight">
          <SearchIcon sx={{ cursor: "pointer" }} />
          <Link href="/cart">
            <AddShoppingCartIcon
              sx={{ color: "#0099ff", cursor: "pointer", margin: "0 15px" }}
              //onClick={handleOnClickCart}
            />
          </Link>
          <AccountCircleIcon sx={{ color: "#0099ff", cursor: "pointer" }} />
        </div>
      </div>
    </div>
  );
};

export default Header;
