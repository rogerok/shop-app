import React from "react";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/redux";
import { setSidebarOpen } from "../../../redux/sidebar/sidebarSlice";
import { RoutesNames } from "../../../router/routes";

type SidebarProps = {
  category: string;
};

const SidebarItem: React.FC<SidebarProps> = ({ category }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const upperCased = category[0].toUpperCase() + category.slice(1);

  const handleClick = () => {
    navigate(`${RoutesNames.COLLECTION}/${category}`);
    dispatch(setSidebarOpen(false));
  };

  return (
    <ListItemButton component="li" onClick={() => handleClick()}>
      <ListItemIcon>
        <ShoppingBasketIcon />
      </ListItemIcon>
      <ListItemText primary={upperCased} />
    </ListItemButton>
  );
};
export default SidebarItem;
