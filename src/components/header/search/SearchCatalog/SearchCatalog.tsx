import React, { FC } from "react";
import { List, Paper, Typography } from "@mui/material";
import SearchProductPreview from "../ProductPreview/ProductPreview";
import { Product, Products } from "../../../../ts/types";
import { StyledList } from "./SearchCatalog.styles";

type SearchCatalogProps = {
  searchResult: Products;
  onClick: () => void;
};

const SearchCatalog: FC<SearchCatalogProps> = ({ searchResult, onClick }) => {
  const num = 0;
  return (
    searchResult && (
      <Paper elevation={3} onClick={onClick}>
        <StyledList>
          {searchResult.length ? (
            searchResult.map((item: Product) => (
              <SearchProductPreview key={item.id} {...item} />
            ))
          ) : (
            <Typography variant="h6" align="center">
              Ничего не найдено
            </Typography>
          )}
        </StyledList>
      </Paper>
    )
  );
};

export default SearchCatalog;
