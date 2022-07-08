import React, { FC } from "react";
import { List, Paper } from "@mui/material";
import SearchProductPreview from "./SearchProductPreview";
import { Product, Products } from "../../interfaces/types";

type SearchCatalogProps = {
  searchResult: Products;
};

const SearchCatalog: FC<SearchCatalogProps> = ({ searchResult }) => {
  const num = 0;
  return (
    searchResult && (
      <Paper elevation={3} sx={{}}>
        <List
          sx={{
            position: "absolute",
            top: "100%",
            left: "0",
            zIndex: "29",
            width: "100%",
            minHeight: "20vh",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white",
            borderRadius: "5px",
          }}
        >
          {searchResult.map((item: Product) => (
            <SearchProductPreview {...item} />
          ))}
        </List>
      </Paper>
    )
  );
};

export default SearchCatalog;
