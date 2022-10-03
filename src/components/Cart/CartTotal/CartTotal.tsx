import React from "react";

import { Box, Divider, Paper, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../hooks/redux";
import useGetTotal from "../../../hooks/useGetTotal";

import Button from "../../common/Button/Button";
import ButtonForOrder from "./ButtonForOrder";

type TotalData = {
  type: string;
  total: number;
  description: string;
};

const totalOptions = ["sum", "quantity"];

const Total: React.FC<TotalData> = ({ description, total, type }) => (
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

const TotalTitle = React.memo(() => (
  <Typography variant="h4" gutterBottom>
    Total:
  </Typography>
));

const CartTotal = () => {
  const data: TotalData[] = useGetTotal(totalOptions);
  const isUserLoggedIn = useAppSelector((state) => state.user.token);
  const navigate = useNavigate();

  const handleClick = () => navigate("/sign-in");

  return (
    <Box display="flex" flexDirection="column">
      <Paper elevation={3} sx={{ p: 2 }}>
        <TotalTitle />
        <Divider />
        {data.map((unit) => (
          <Total
            key={unit.type}
            description={unit.description}
            total={unit.total}
            type={unit.type}
          />
        ))}

        {isUserLoggedIn && <ButtonForOrder />}
        {!isUserLoggedIn && <Button onClick={handleClick}>Order</Button>}
      </Paper>
    </Box>
  );
};
export default CartTotal;
