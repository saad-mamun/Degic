import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
const Navbar = () => {

 let  [open, setOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const menuItems = ["About", "Services", "Contact", "Projects"];

  return (
    <>
      <AppBar
      elevation={0}
        className="Navbar"
        position="static"
        sx={{ backgroundColor: "white", color: "black", borderBottom:"2px solid black/0.5"}}
      >
        <Toolbar>
          {isMobile ? (
            <div>
              <IconButton color="inherit" onClick={() => setOpen(true)}>
                <MenuIcon />
              </IconButton>
            </div>
          ) : (
            <>
              <Typography sx={{ flexGrow: 1 }}>
                <img src="/public/degic.png" alt="Degic" />
              </Typography>
              {menuItems.map((item, index) => (
                <Button color="inherit" key={index}>
                  {item}
                </Button>
              ))}
              <Button
                variant="outlined"
                sx={{
                  color: "#2AB691",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  "&:hover": {
                    backgroundColor: "#2AB666",
                    color: "white"
                  },
                }}
              >
                Sign Up
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={open} onClose={()=> setOpen(false)} >
        <List>
            {menuItems.map((item, index) => (
              <ListItem button key={index} onClick={()=> setOpen(false)}>
               
                  <ListItemText>{item}</ListItemText>
               
              </ListItem>
            ))}
            <ListItem button >
                <ListItemText primary="Sign Up" />
            </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
