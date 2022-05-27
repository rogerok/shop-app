import React, { Dispatch, FC, SetStateAction } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Link from "@mui/material/Link";
import {
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";

import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link as RouterLink } from "react-router-dom";

interface NavProps {
  isOpen: boolean;
  toggleOpen: Dispatch<SetStateAction<boolean>>;
}

const data = [
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

const ListItem = ({ path }: { path: string }) => {
  const text = path[0].toUpperCase() + path.slice(1);

  return (
    <ListItemButton>
      <ListItemIcon>
        <ShoppingBasketIcon />
      </ListItemIcon>
      <Link to={`category/${path}`} component={RouterLink}>
        <ListItemText primary={text} />
      </Link>
    </ListItemButton>
  );
};

const Sidebar: FC<NavProps> = ({ isOpen, toggleOpen }) => (
  <Grid item xs={6} onClick={() => toggleOpen(false)}>
    <Drawer
      open={isOpen}
      onClose={() => toggleOpen(false)}
      anchor="left"
      style={{ width: "100%" }}
    >
      <List>
        {data.map((item) => (
          <ListItem key={item} path={item} />
        ))}
      </List>
    </Drawer>
  </Grid>
);

export default Sidebar;
