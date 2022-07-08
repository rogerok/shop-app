import React, { useEffect, useState } from "react";

import { Box, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { StyledTextField } from "./styles";

import useDebounce from "../../hooks/useDebounce";
import SearchCatalog from "../search-catalog/SearchCatalog";
import {
  shopApi,
  useSearchProductsQuery,
} from "../../services/shopServices/shopApi";
import { useAppDispatch } from "../../hooks/redux";

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState<string | null>("");
  const [isFocused, setIsFocused] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm!, 500);
  const { data } = useSearchProductsQuery(debouncedSearchTerm);
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLocaleLowerCase());
  };

  const handleBlur = () => {
    setIsFocused(false);
    setSearchTerm("");
  };

  useEffect(() => {
    if (!isFocused) dispatch(shopApi.util.resetApiState());
  }, [handleBlur]);

  return (
    <Box sx={{ width: "40%", position: "relative" }}>
      <StyledTextField
        name="search"
        type="text"
        value={searchTerm}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={handleBlur}
        placeholder="Я ищу..."
        variant="outlined"
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      {data && isFocused && <SearchCatalog searchResult={data!.products} />}
    </Box>
  );
};

export default SearchInput;
