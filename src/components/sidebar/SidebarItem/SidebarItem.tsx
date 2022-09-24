import React from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

import { useNavigate } from "react-router-dom";
import { RoutesNames } from "../../../router/routes";

type SidebarProps = {
  category: string;
};

const SidebarItem: React.FC<SidebarProps> = ({ category }) => {
  const navigate = useNavigate();
  const upperCased = category[0].toUpperCase() + category.slice(1);

  const handleClick = () => {
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
