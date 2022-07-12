import React, { FC } from "react";
import { List, Paper, Typography } from "@mui/material";
import SearchProductPreview from "./SearchProductPreview";
import { Product, Products } from "../../../ts/types";

type SearchCatalogProps = {
  searchResult: Products;
  onClick: () => void;
};

const SearchCatalog: FC<SearchCatalogProps> = ({ searchResult, onClick }) => {
  const num = 0;
  return (
    searchResult && (
      <Paper elevation={3} onClick={onClick}>
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
            backgroundColor: "primary.light",
            border: "1px solid",
            borderColor: "primary.main",
            borderRadius: "5px",
          }}
        >
          {searchResult.length ? (
            searchResult.map((item: Product) => (
              <SearchProductPreview key={item.id} {...item} />
            ))
          ) : (
            <Typography variant="h6" align="center">
              Ничего не найдено
            </Typography>
          )}
        </List>
      </Paper>
    )
  );
};

export default SearchCatalog;
