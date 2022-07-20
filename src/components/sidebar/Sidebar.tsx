import React from "react";
import { Drawer, Box } from "@mui/material";

import SidebarItem from "./SidebarItem/SidebarItem";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  selectIsSideBarOpen,
  setSidebarOpen,
} from "../../redux/sidebar/sidebarSlice";

import { PRODUCTS_CATEGORIES } from "../../utils/constants/PRODUCTS_CATEGORIES";

import { StyledList } from "./Sidebar.styles";

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
            <SidebarItem key={category} category={category} />
          ))}
        </StyledList>
      </Drawer>
    </Box>
  );
};
export default Sidebar;
