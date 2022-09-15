import React, { useContext, useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Logo from "../public/headerLogo.png";
import Link from "next/link";
import Image from "next/image";
import { CartContext } from "../Context";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Avatar } from "@mui/material";
import { deepOrange, deepPurple } from "@mui/material/colors";
import { useRouter } from "next/router";

const Header = () => {
  const { cart, setCart } = useContext(CartContext);
  const [userSession, setUserSession] = useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const router = useRouter();

  const handleLogout = () => {
    sessionStorage.removeItem("User");
    location.href = "/";
    handleClose();
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (sessionStorage.getItem("User")) {
      setUserSession(JSON.parse(sessionStorage.getItem("User")));
    }
  }, [router, userSession?.email]);

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
          {/* <SearchIcon sx={{ cursor: "pointer" }} /> */}
          <div style={{ position: "relative" }}>
            <Link href="/cart">
              <AddShoppingCartIcon
                sx={{
                  color: "#0099ff",
                  cursor: "pointer",
                  margin: "2px 20px 0px 15px",
                }}
              />
            </Link>
            {cart.length > 0 && <div className="cartItems">{cart.length}</div>}
          </div>
          <div>
            {userSession?.email ? (
              <Avatar
                sx={{
                  bgcolor: deepOrange[500],
                  width: 27,
                  height: 27,
                  fontSize: "13px",
                }}
                onClick={handleClick}
              >
                {userSession?.email[0].toUpperCase()}
              </Avatar>
            ) : (
              <AccountCircleIcon sx={{ color: "#0099ff", cursor: "pointer" }} />
            )}

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              sx={{ marginTop: "10px" }}
            >
              {/* <MenuItem>Hi {userSession}!</MenuItem> */}
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
