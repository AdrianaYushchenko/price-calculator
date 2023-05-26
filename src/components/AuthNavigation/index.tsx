import React from "react";
import { Box, Button } from "@mui/material";

import { Colors } from "../../styles/colors";

export const AuthNavigation = ({
  isMenuOpened,
}: {
  isMenuOpened?: boolean;
}) => {
  return (
    <Box
      sx={{
        display: { xs: isMenuOpened ? "flex" : "block", md: "flex" },
        ...{
          ...(isMenuOpened && {
            mx: 3,
          }),
        },
      }}
    >
      <Button
        sx={{
          display: { xs: isMenuOpened ? "block" : "none", md: "block" },
          textTransform: "none",
          color: Colors.white,
          ...{
            ...(isMenuOpened && {
              color: Colors.white,
              border: `1px solid ${Colors.white}`,
              px: 3,
              py: 1,
            }),
          },
        }}
      >
        Sign Up
      </Button>

      <Button
        sx={{
          backgroundColor: Colors.yellow,
          color: Colors.darkBlue,
          textTransform: "none",
          height: "50%",
          px: 3,
          py: 1,
          ml: 2,
          mr: { md: 5 },
          fontWeight: 600,
          flexGrow: 0,
        }}
      >
        Log In
      </Button>
    </Box>
  );
};
