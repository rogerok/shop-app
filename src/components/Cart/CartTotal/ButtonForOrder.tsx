import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { useAddUserOrderMutation } from "../../../services/userApi";
import { clearCart, selectCartItems } from "../../../store/cart/cartSlice";
import { selectUserData } from "../../../store/user/userSlice";

import Button from "../../common/Button/Button";
import RequestStatus from "../../common/RequestStatus/RequestStatus";

const ButtonForOrder = () => {
  const [addUserOrder, { isLoading, isSuccess, isError }] =
    useAddUserOrderMutation();
  const dispatch = useAppDispatch();
  const { firstName, lastName, phone, email } = useAppSelector(selectUserData);
  const cartItems = useAppSelector(selectCartItems);
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

  // eslint-disable-next-line arrow-body-style
  useEffect(() => {
    return () => {
      if (isSuccess) dispatch(clearCart());
    };
  }, [isSuccess]);

  return isSuccess || isLoading || isError ? (
    <>
      <RequestStatus
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
        navigateTo="/"
      />
      <Button onClick={handleOrder} disabled={isCartEmpty}>
        Order
      </Button>
    </>
  ) : (
    <Button onClick={handleOrder} disabled={isCartEmpty}>
      Order
    </Button>
  );
};

export default ButtonForOrder;
