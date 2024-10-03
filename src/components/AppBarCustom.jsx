import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Typography, Button, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";  // Update for icons too
import { red } from "@mui/material/colors";


export default function AppBarCustom() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);  // State to control Drawer visibility

  return (
   
    <AppBar position="static" sx={{
      backgroundColor: "Black"


    }}>  {/* Static AppBar at the top */}
      <Toolbar>  {/* Toolbar to hold the elements inside the AppBar */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => setIsDrawerOpen(true)}  // Opens Drawer when clicked
        >
          <MenuIcon />  {/* Icon for the button */}
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>The title</Typography>  {/* Title of the app */}

        {/* Box to contain the Sign In and Sign Up buttons aligned to the right */}
        <Box>
          <Button color="inherit">Sign In</Button>  {/* Sign In button */}
          <Button color="inherit">Sign Up</Button>  {/* Sign Up button */}
        </Box>

        <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>  {/* Drawer component, closes on click outside */}
          <List>  {/* List of navigation items */}
            <ListItem button>  {/* Navigation item: Home */}
              <ListItemText primary="Home" />
            </ListItem>

            <ListItem button>  {/* Navigation item: About */}
              <ListItemText primary="About" />
            </ListItem>

            <ListItem button>  {/* Navigation item: Contact */}
              <ListItemText primary="Contact" />
            </ListItem>

            <ListItem button>  {/* Navigation item: Services */}
              <ListItemText primary="Services" />
            </ListItem>
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  
  );
}