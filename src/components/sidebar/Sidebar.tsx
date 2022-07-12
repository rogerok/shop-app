import React from "react";
import {
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Grid,
  Drawer,
} from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  selectIsSideBarOpen,
  setSidebarOpen,
} from "../../redux/sidebar/sidebarSlice";

import { StyledList } from "./Sidebar.styles";

import { ROUTES_PATHS } from "../../utils/routes-paths";

const categories = [
  "smartphones",
  "laptops",
  "fragrances",
  "skincare",
  "groceries",
  "home-decoration",
  "furniture",
  "tops",
  "womens-dresses",
  "womens-shoes",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "womens-watches",
  "womens-bags",
  "womens-jewellery",
  "sunglasses",
  "automotive",
  "motorcycle",
  "lighting",
];

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
    <Grid item xs={6} component="aside">
      <Drawer
        open={isidebarOpen}
        onClose={() => dispatch(setSidebarOpen(false))}
        anchor="left"
      >
        <StyledList>
          {categories.map((category) => (
            <ListItem key={category} category={category} />
          ))}
        </StyledList>
      </Drawer>
    </Grid>
  );
};
export default Sidebar;
