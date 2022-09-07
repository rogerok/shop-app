import React from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/redux";
import { setSidebarOpen } from "../../../redux/ui/uiSlice";
import { RoutesNames } from "../../../router/routes";

type SidebarProps = {
  category: string;
};
// TODO fix automatic closing on list item click
const SidebarItem: React.FC<SidebarProps> = ({ category }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const upperCased = category[0].toUpperCase() + category.slice(1);

  const handleClick = () => {
    /*  dispatch(setSidebarOpen(false)); */
    navigate(`/${RoutesNames.COLLECTION}/${category}`);
  };

  return (
    <ListItem>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <ShoppingBasketIcon />
        </ListItemIcon>
        <ListItemText primary={upperCased} />
      </ListItemButton>
    </ListItem>
  );
};
export default SidebarItem;
