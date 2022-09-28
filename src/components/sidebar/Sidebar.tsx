import React from "react";
import { Drawer, Box } from "@mui/material";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { selectIsSidebarOpen, setSidebarOpen } from "../../redux/ui/uiSlice";

import { PRODUCTS_CATEGORIES } from "../../utils/constants/PRODUCTS_CATEGORIES";

import SidebarItem from "./SidebarItem/SidebarItem";
import { StyledList } from "./Sidebar.styles";

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const isSidebarOpen = useAppSelector(selectIsSidebarOpen);

  const handleClose = () => {
    dispatch(setSidebarOpen(false));
  };

  return (
    <Box component="aside">
      <Drawer open={isSidebarOpen} onClose={handleClose} anchor="left">
        <Box>
          <StyledList>
            {PRODUCTS_CATEGORIES.map((category) => (
              <SidebarItem key={category} category={category} />
            ))}
          </StyledList>
        </Box>
      </Drawer>
    </Box>
  );
};
export default Sidebar;
