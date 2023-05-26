import React, { useContext, useEffect, useState } from "react";
import { Box, TextField } from "@mui/material";

import { AppContext } from "../../context";
import { GOLD_ITEM_PRICE } from "../../utils/constants";

export const PriceCalculator = () => {
  const { selectedCurrency } = useContext(AppContext);
  const [value, setValue] = useState({ input: 0, converted: 0 });

  useEffect(() => {
    convertValue(value.input);
  }, [selectedCurrency]);

  const convertValue = (value: number) => {
    setValue({
      input: value,
      converted: Math.floor(value * (GOLD_ITEM_PRICE * selectedCurrency.ratesRatio)),
    });
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "center",
        m: 5,
      }}
    >
      <TextField
        sx={{ m: 2 }}
        label="Amount"
        variant="outlined"
        defaultValue={0}
        onChange={(e) => convertValue(Number(e.target.value))}
      />
      <TextField
        sx={{ m: 2 }}
        label="Price"
        variant="outlined"
        value={`${selectedCurrency.name}: ${value.converted}`}
        disabled
      />
    </Box>
  );
};
