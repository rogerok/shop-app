import React, { useEffect } from "react";
import { Badge, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import {
  selectTotalQuantity,
  getTotalQuantity,
} from "../../../store/cart/cartSlice";

import IconLink from "../../common/IconLink/IconLink";

const CartIcon = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);
  const cartQuantity = useAppSelector(selectTotalQuantity);

  useEffect(() => {
    dispatch(getTotalQuantity());
  }, [cart, dispatch]);

  return (
    <Badge badgeContent={cartQuantity} overlap="circular" color="secondary">
      <IconLink path="/cart" icon={<ShoppingCartIcon />} component={NavLink}>
        <Typography variant="body1" component="span" fontWeight={300}>
          Cart
        </Typography>
      </IconLink>
    </Badge>
  );
};

export default React.memo(CartIcon);
