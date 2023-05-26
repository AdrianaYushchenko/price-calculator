import React, { useContext } from "react";
import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

import { CURRENCIES } from "../../utils/constants";
import { AppContext } from "../../context";
import { Colors } from "../../styles/colors";

export const NewSelect = () => {
  const { selectedCurrency, setSelectedCurrency } = useContext(AppContext);

  return (
    <FormControl
      sx={{
        m: 1,
        minWidth: 80,
        width: { xs: "95%" },
      }}
    >
      <Select
        sx={{
          color: Colors.white,
          ".MuiSelect-select": {
            display: "flex",
          },
          ".MuiOutlinedInput-notchedOutline": { border: 0 },
          ".MuiSvgIcon-root ": {
            fill: Colors.white,
          },
        }}
        IconComponent={ExpandMoreOutlinedIcon}
        value={selectedCurrency.name}
        onChange={(e) =>
          setSelectedCurrency(
            CURRENCIES.find((currency) => currency.name === e.target.value) ||
              CURRENCIES[0]
          )
        }
        autoWidth
        label="Currency"
        MenuProps={{
          PaperProps: {
            sx: {
              width: { xs: "100%", md: "auto" },
            },
          },
          MenuListProps: {
            disablePadding: true,
            sx: {
              ".Mui-selected": {
                backgroundColor: `${Colors.darkBlue} !important`,
              },
              ".Mui-selected:hover": {
                backgroundColor: `${Colors.darkBlueHover} !important`,
              },
            },
          },
        }}
      >
        {CURRENCIES.map(
          ({ name, image }) => (
            <MenuItem
              value={name}
              sx={{
                backgroundColor: Colors.darkBlue,
                "&:hover": {
                  backgroundColor: Colors.darkBlueHover,
                  borderRight: `1px solid ${Colors.yellow}`,
                  color: Colors.yellow,
                },
              }}
            >
              <Box component="img" src={image} alt={name} sx={{ mr: 1 }} />
              <Typography
                sx={{
                  color: Colors.white,
                  "&:hover": {
                    color: Colors.yellow,
                  },
                }}
                variant="body1"
              >
                {name}
              </Typography>
            </MenuItem>
          )
        )}
      </Select>
    </FormControl>
  );
};
