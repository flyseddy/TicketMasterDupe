import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";

import { Link } from "react-router-dom";

  
function Navbar() {

  return (
    <AppBar position="relative" color="transparent">
      <Toolbar variant="regular" sx={{ justifyContent: "space-between" }}>
        <Typography variant="h4" fontFamily={"Segoe UI"}>
        <Link reloadDocument to="/" >TicketMaster DUPE</Link>
        </Typography>
          <div >
            <Typography variant="h6" alight="right">
            <Link to="/addPerson" >Shopping Cart</Link>
            </Typography>
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;