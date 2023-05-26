import React from "react";
import { Box, Divider, Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { NavBar } from "../NavBar";
import { NewSelect } from "../Select";
import { AuthNavigation } from "../AuthNavigation";

type NavigationMenuProps = {
  isMenuOpened: boolean;
  handleMenuChange: (change: boolean) => void;
};

export const NavigationMenu = ({
  isMenuOpened,
  handleMenuChange,
}: NavigationMenuProps) => {
  return (
    <Box
      sx={{
        display: { xs: "flex", md: "none", justifyContent: "center" },
      }}
    >
      <IconButton
        size="large"
        aria-haspopup="true"
        onClick={() => handleMenuChange(true)}
        color="inherit"
        sx={{ pl: 0 }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor="left"
        open={isMenuOpened}
        onClose={() => handleMenuChange(false)}
        PaperProps={{
          sx: { width: "100%" },
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundColor: "#142241",
          }}
          role="presentation"
          onClick={() => handleMenuChange(false)}
          onKeyDown={() => handleMenuChange(false)}
        >
          <IconButton sx={{ my: 3 }} onClick={() => handleMenuChange(false)}>
            <CloseIcon sx={{ color: "#fff", mx: 2 }} />
          </IconButton>
          <Divider sx={{ mx: 3 }} color="#fff" />
          <NavBar isMenuOpened={isMenuOpened} />
          <NewSelect />
          <Divider sx={{ mx: 3, mb: 3 }} color="#fff" />
          <AuthNavigation isMenuOpened={isMenuOpened} />
        </Box>
      </Drawer>
    </Box>
  );
};
