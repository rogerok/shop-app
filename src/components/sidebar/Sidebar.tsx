import React, { Dispatch, FC, SetStateAction } from "react";
import {
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Grid,
  Box,
  Drawer,
  Link,
} from "@mui/material";

import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link as RouterLink } from "react-router-dom";
import { StyledList } from "./styles";

interface NavProps {
  isOpen: boolean;
  toggleOpen: Dispatch<SetStateAction<boolean>>;
}

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
  const upperCased = category[0].toUpperCase() + category.slice(1);

  return (
    <ListItemButton component="li">
      <ListItemIcon>
        <ShoppingBasketIcon />
      </ListItemIcon>
      <Link to={`collection/${category}`} component={RouterLink}>
        <ListItemText primary={upperCased} />
      </Link>
    </ListItemButton>
  );
};

const Sidebar: FC<NavProps> = ({ isOpen, toggleOpen }) => (
  <Grid item xs={6} component="aside">
    <Drawer open={isOpen} onClose={() => toggleOpen(false)} anchor="left">
      <StyledList>
        {categories.map((category) => (
          <ListItem key={category} category={category} />
        ))}
      </StyledList>
    </Drawer>
  </Grid>
);

export default Sidebar;
