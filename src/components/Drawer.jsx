import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { NavLink } from "react-router-dom";
import styles from "./Drawer.module.css";

export default function NavDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 180 }} role="presentation" onClick={toggleDrawer(false)}>
      <div className="px-8 py-5 text-white flex flex-col gap-3 font-['Montserrat']">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? `${styles.active}` : `${styles.normal}`)}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? `${styles.active}` : `${styles.normal}`)}
        >
          About
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) => (isActive ? `${styles.active}` : `${styles.normal}`)}
        >
          Services
        </NavLink>
        <NavLink
          to="/courses"
          className={({ isActive }) => (isActive ? `${styles.active}` : `${styles.normal}`)}
        >
          Courses
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? `${styles.active}` : `${styles.normal}`)}
        >
          Contact
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) => (isActive ? `${styles.active}` : `${styles.normal}`)}
        >
          Blog
        </NavLink>
      </div>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <MenuRoundedIcon sx={{ width: 40, height: 40, color: "#80AF81" }} />
      </Button>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        anchor="right"
        PaperProps={{
          sx: {
            height: "330px",
            display: "block",
            position: "absolute",
            backgroundColor: "#113D3D",
            borderTopLeftRadius:"20px",
            borderEndEndRadius:"20px"
          },
        }}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}
