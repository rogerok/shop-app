import React, { FC, useEffect } from "react";
import { List, Paper, Typography } from "@mui/material";
import SearchProductPreview from "../ProductPreview/ProductPreview";
import { Product, Products } from "../../../../ts/types";
import { StyledList } from "./SearchCatalog.styles";
import { useSearchProductsQuery } from "../../../../services/shopServices/shopApi";

type SearchCatalogProps = {
  onClick: () => void;
  searchTerm: string;
};

const SearchCatalog: FC<SearchCatalogProps> = ({ onClick, searchTerm }) => {
  const { data, refetch } =
    useSearchProductsQuery(searchTerm, {
      skip: !searchTerm.length,
    }) ?? [];
  useEffect(() => {
    refetch();
  }, [searchTerm]);
  return !searchTerm ? null : (
    <Paper elevation={3} onClick={onClick}>
      <StyledList>
        {data!.length ? (
          data!.map((item: Product) => (
            <SearchProductPreview key={item.id} {...item} />
          ))
        ) : (
          <Typography variant="h6" align="center">
            Ничего не найдено
          </Typography>
        )}
      </StyledList>
    </Paper>
  );
};

export default SearchCatalog;
