import { Grid, Box, Paper, Typography } from "@mui/material";
import React, { FC, useEffect } from "react";
import useGetTotal from "../../hooks/useGetTotal";

type TotalType = {
  type: "sum" | "quantity";
  total: number;
};
interface CountProps extends TotalType {
  description: string;
}

const Total: FC<CountProps> = ({ description, total, type }) => (
  <Box component="p" sx={{ display: "flex", justifyContent: "space-between" }}>
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
  const { data, getDescription } = useGetTotal();
  return (
    <Grid item xs={4} component="aside">
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h4" gutterBottom>
            Итого:
          </Typography>
          {data.map((unit) => {
            const description = getDescription(unit);
            return (
              <Total
                key={unit.type}
                description={description}
                total={unit.total}
                type={unit.type}
              />
            );
          })}
        </Paper>
      </Box>
    </Grid>
  );
};
export default CartTotal;
