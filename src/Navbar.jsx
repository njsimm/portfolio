import * as React from "react";
import navbarLinks from "./NavbarLinks";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-scroll";

const drawerWidth = 240;

const Navbar = ({ window }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Nick's Portfolio
      </Typography>
      <Divider />
      <List>
        {navbarLinks.map((link) => {
          if (link.type === "internal") {
            return (
              <Link
                key={link.name}
                to={link.path}
                spy={true}
                smooth={true}
                duration={500}
                offset={-45}
                onClick={handleDrawerToggle}
              >
                <ListItem disablePadding>
                  <ListItemButton sx={{ textAlign: "center" }}>
                    <ListItemText primary={link.name} />
                  </ListItemButton>
                </ListItem>
              </Link>
            );
          } else {
            return (
              <a
                key={link.name}
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <ListItem disablePadding>
                  <ListItemButton sx={{ textAlign: "center" }}>
                    <ListItemText primary={link.name} />
                  </ListItemButton>
                </ListItem>
              </a>
            );
          }
        })}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{ backgroundColor: "#ffffff", color: "#000000" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "flex" },
              justifyContent: "center",
            }}
          >
            {navbarLinks.map((link) => {
              if (link.type === "internal") {
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-112}
                  >
                    <Button sx={{ color: "#000000", px: 4 }}>
                      {link.name}
                    </Button>
                  </Link>
                );
              } else {
                return (
                  <a
                    key={link.name}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Button sx={{ color: "#000000", px: 4 }}>
                      {link.name}
                    </Button>
                  </a>
                );
              }
            })}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default Navbar;
