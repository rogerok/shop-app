import React, { useEffect } from "react";

import { Box, Paper, Typography, Divider } from "@mui/material";

import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { useAddUserOrderMutation } from "../../../services/shopApi";
import { selectUserData } from "../../../store/user/userSlice";
import useGetTotal from "../../../hooks/useGetTotal";
import { clearCart, selectCartItems } from "../../../store/cart/cartSlice";

import Button from "../../common/Button/Button";
import RequestStatus from "../../common/RequestStatus/RequestStatus";

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
  const [addUserOrder, { isLoading, isSuccess, isError }] =
    useAddUserOrderMutation();
  const dispatch = useAppDispatch();
  const isUserLoggedIn = useAppSelector((state) => state.user.token);
  const cartItems = useAppSelector(selectCartItems);
  const { firstName, lastName, phone, email } = useAppSelector(selectUserData);
  const isCartEmpty = !cartItems.length;

  const handleOrder = async () => {
    const userData = {
      firstName,
      lastName,
      phone,
      email,
    };
    await addUserOrder({ cartItems, userData });
  };

  useEffect(() => {
    if (isSuccess) dispatch(clearCart());
  }, [isSuccess]);

  return (
    <Box display="flex" flexDirection="column">
      {isSuccess || isLoading || isError ? (
        <RequestStatus
          isLoading={isLoading}
          isSuccess={isSuccess}
          isError={isError}
          navigateTo="/"
        />
      ) : null}
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

        {isUserLoggedIn && (
          <Button onClick={handleOrder} disabled={isCartEmpty}>
            order
          </Button>
        )}
      </Paper>
    </Box>
  );
};
export default CartTotal;
