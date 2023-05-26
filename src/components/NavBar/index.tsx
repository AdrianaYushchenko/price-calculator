import React, { useState } from "react";
import { Box, Button, Divider } from "@mui/material";

import { PAGES } from "../../utils/constants";
import { Colors } from "../../styles/colors";

export const NavBar = ({ isMenuOpened }: { isMenuOpened?: boolean }) => {
  const [activeButton, setActiveButton] = useState("");

  return (
    <Box
      px={3}
      sx={{
        flexGrow: 1,
        display: { xs: isMenuOpened ? "block" : "none", md: "flex" },
      }}
    >
      {PAGES.map((page) => (
        <>
          <Button
            key={page}
            onClick={() => setActiveButton(page)}
            sx={{
              color: Colors.white,
              textTransform: "none",
              mx: { xs: 0, md: 2 },
              my: { xs: 1, md: 2 },
              px: 0,
              ...{
                ...((activeButton === page || page === "RS3 Gold") && {
                  color: Colors.yellow,
                }),
              },
              ...{
                ...(page === "RS3 Gold" &&
                  !isMenuOpened && {
                    "&::after": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      width: "40%",
                      left: 3,
                      bottom: 0,
                      borderTop: `2px solid ${Colors.yellow}`,
                    },
                  }),
              },
            }}
          >
            {page}
          </Button>
          {isMenuOpened && <Divider color={Colors.white} />}
        </>
      ))}
    </Box>
  );
};
