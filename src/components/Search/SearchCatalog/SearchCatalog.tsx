import React, { FC, useEffect } from "react";
import { Typography } from "@mui/material";

import { Product, Products } from "../../../ts/types";
import { useSearchProductsQuery } from "../../../services/shopServices/shopApi";

import SearchProductPreview from "../ProductPreview/ProductPreview";
import Spinner from "../../common/Spinner/Spinner";
import Link from "../../common/Link/Link";
import { StyledList, StyledPaper } from "./SearchCatalog.styles";

type SearchCatalogProps = {
  handleClearInput: () => void;
  searchTerm: string;
};

const SearchCatalog: FC<SearchCatalogProps> = ({
  handleClearInput,
  searchTerm,
}) => {
  const { data, isLoading, refetch } = useSearchProductsQuery(searchTerm) ?? [];

  useEffect(() => {
    refetch();
  }, [searchTerm]);

  const renderListItems = (products: Products) => {
    let content;

    if (products.length && products.length < 4) {
      content = products!.map((item: Product) => (
        <SearchProductPreview key={item.id} {...item} />
      ));
    }

    if (products.length && products.length > 4) {
      content = (
        <>
          {products!.slice(0, 4).map((item: Product) => (
            <SearchProductPreview key={item.id} {...item} />
          ))}

          <Link to={`search/${searchTerm}`}>Show more</Link>
        </>
      );
    }
    return content;
  };

  return (
    <StyledPaper elevation={3} onClick={handleClearInput}>
      {isLoading ? (
        <Spinner />
      ) : (
        <StyledList>
          {data!.length ? (
            /*      data!.map((item: Product) => (
              <SearchProductPreview key={item.id} {...item} />
            )) */
            renderListItems(data!)
          ) : (
            <Typography variant="h6" align="center">
              Not founded
            </Typography>
          )}
        </StyledList>
      )}
    </StyledPaper>
  );
};

export default SearchCatalog;
