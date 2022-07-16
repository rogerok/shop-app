import React from "react";
import {
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Drawer,
  Box,
} from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  selectIsSideBarOpen,
  setSidebarOpen,
} from "../../redux/sidebar/sidebarSlice";
import { ROUTES_PATHS } from "../../router/routes";
import { PRODUCTS_CATEGORIES } from "../../utils/constants/PRODUCTS_CATEGORIES";

import { StyledList } from "./Sidebar.styles";

const ListItem = ({ category }: { category: string }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const upperCased = category[0].toUpperCase() + category.slice(1);

  const handleClick = () => {
    navigate(`${ROUTES_PATHS.COLLECTION}/${category}`);
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

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const isidebarOpen = useAppSelector(selectIsSideBarOpen);

  return (
    <Box component="aside">
      <Drawer
        open={isidebarOpen}
        onClose={() => dispatch(setSidebarOpen(false))}
        anchor="left"
      >
        <StyledList>
          {PRODUCTS_CATEGORIES.map((category) => (
            <ListItem key={category} category={category} />
          ))}
        </StyledList>
      </Drawer>
    </Box>
  );
};
export default Sidebar;
