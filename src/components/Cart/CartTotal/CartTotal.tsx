import React, { FC } from "react";

import { Box, Paper, Typography, Divider } from "@mui/material";

import useGetTotal from "../../../hooks/useGetTotal";

type TotalData = {
  type: string;
  total: number;
  description: string;
};

const totalOptions = ["sum", "quantity"];

const Total: FC<TotalData> = ({ description, total, type }) => (
  <Box component="p" display="flex" justifyContent="space-between">
    <Typography variant="h6" component="span" gutterBottom>
      {description}
    </Typography>
    <Typography variant="h6" component="span">
      {type === "sum" && "$"}
      {total}
    </Typography>
  </Box>
);

const CartTotal = () => {
  const data: TotalData[] = useGetTotal(totalOptions);
  return (
    <Box display="flex" flexDirection="column">
      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography variant="h4" gutterBottom>
          Total:
        </Typography>
        <Divider />

        {data.map((unit) => (
          <Total
            key={unit.type}
            description={unit.description}
            total={unit.total}
            type={unit.type}
          />
        ))}
      </Paper>
    </Box>
  );
};
export default React.memo(CartTotal);
