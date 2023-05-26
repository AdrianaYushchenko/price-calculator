import React, { useState } from "react";
import { AppBar, Box, Container, Toolbar } from "@mui/material";

import Logo from "../../assets/logo.svg";
import { NewSelect } from "../Select";
import { AuthNavigation } from "../AuthNavigation";
import { NavigationMenu } from "../NavigationMenu";
import { NavBar } from "../NavBar";
import { Colors } from "../../styles/colors";

export const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const handleMenuChange = (menuChange: boolean) => setIsMenuOpened(menuChange);

  return (
    <AppBar position="static">
      <Container
        sx={{ background: Colors.darkBlue, px: 3, py: 1 }}
        maxWidth="xl"
      >
        <Toolbar disableGutters>
          <NavigationMenu
            isMenuOpened={isMenuOpened}
            handleMenuChange={handleMenuChange}
          />

          <Box
            sx={{
              flexGrow: { xs: 1, md: 0 },
              textAlign: "center",
              ml: { md: 5 },
            }}
          >
            <Box component="img" src={Logo} alt="Logo" />
          </Box>

          <NavBar />

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <NewSelect />
          </Box>

          <AuthNavigation />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
