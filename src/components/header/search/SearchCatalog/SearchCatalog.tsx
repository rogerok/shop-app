import React, { FC, useEffect } from "react";
import { List, Paper, Typography } from "@mui/material";
import SearchProductPreview from "../ProductPreview/ProductPreview";
import { Product, Products } from "../../../../ts/types";
import { StyledList, StyledPaper } from "./SearchCatalog.styles";
import { useSearchProductsQuery } from "../../../../services/shopServices/shopApi";
import Spinner from "../../../common/Spinner/Spinner";

type SearchCatalogProps = {
  onClick: () => void;
  searchTerm: string;
};

const SearchCatalog: FC<SearchCatalogProps> = ({ onClick, searchTerm }) => {
  const { data, isLoading, refetch } = useSearchProductsQuery(searchTerm) ?? [];
  useEffect(() => {
    refetch();
  }, [searchTerm]);

  return (
    <StyledPaper elevation={3} onClick={onClick}>
      {isLoading ? (
        <Spinner />
      ) : (
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
      )}
    </StyledPaper>
  );
};

export default SearchCatalog;
