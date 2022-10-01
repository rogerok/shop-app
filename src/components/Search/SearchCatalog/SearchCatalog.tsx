import React, { useEffect } from "react";
import { Typography } from "@mui/material";

import { useSearchProductsForPreviewQuery } from "../../../services/shopApi";
import { ProductType, ProductsType } from "../../../ts/ProductsTypes";

import CustomLink from "../../common/CustomLink/CustomLink";
import ProductPreview from "../ProductPreview/ProductPreview";
import Spinner from "../../common/Spinner/Spinner";
import { StyledList, StyledPaper } from "./SearchCatalog.styles";

type SearchCatalogProps = {
  handleClearInput: () => void;
  searchTerm: string;
};

const SearchCatalog: React.FC<SearchCatalogProps> = ({
  handleClearInput,
  searchTerm,
}) => {
  const { data, isLoading, refetch } =
    useSearchProductsForPreviewQuery(searchTerm) ?? [];

  useEffect(() => {
    refetch();
  }, [searchTerm]);

  const renderListItems = (products: ProductsType) => {
    let content;

    if (products.length && products.length < 4) {
      content = products.map((item: ProductType) => (
        <ProductPreview key={item.id} {...item} />
      ));
    }

    if (products.length && products.length > 4) {
      content = (
        <>
          {products.slice(0, 4).map((item: ProductType) => (
            <ProductPreview key={item.id} {...item} />
          ))}

          <CustomLink to={`search/${searchTerm}`} withBackground>
            Show more
          </CustomLink>
        </>
      );
    }
    return content;
  };

  return (
    <StyledPaper elevation={3} onClick={handleClearInput}>
      {isLoading || !data ? (
        <Spinner />
      ) : (
        <StyledList>
          {data.length ? (
            renderListItems(data)
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
