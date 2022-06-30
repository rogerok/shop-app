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

import { StyledList } from "./styles";

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
  const navigate = useNavigate();
  const upperCased = category[0].toUpperCase() + category.slice(1);
  return (
    <ListItemButton
      component="li"
      onClick={() => navigate(`collection/${category}`)}
    >
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
