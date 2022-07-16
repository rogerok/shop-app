import React, { useEffect, useState } from "react";

import { Box, InputAdornment, ClickAwayListener } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { StyledTextField } from "./SearchInput.styles";

import useDebounce from "../../../../hooks/useDebounce";
import SearchCatalog from "../SearchCatalog/SearchCatalog";
import {
  shopApi,
  useSearchProductsQuery,
} from "../../../../services/shopServices/shopApi";
import { useAppDispatch } from "../../../../hooks/redux";

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState<string | null>("");
  const [isFocused, setIsFocused] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm!, 500);
  const { data } = useSearchProductsQuery(debouncedSearchTerm, {
    skip: !debouncedSearchTerm.length,
  });
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLocaleLowerCase());
  };

  const handleClickAway = () => {
    setIsFocused(false);
    setSearchTerm("");
  };

  useEffect(() => {
    if (!isFocused) dispatch(shopApi.util.resetApiState());
  }, [handleClickAway]);

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box sx={{ width: "40%", position: "relative" }}>
        <StyledTextField
          name="search"
          type="text"
          autoComplete="off"
          value={searchTerm}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
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
        {data && isFocused && (
          <SearchCatalog searchResult={data} onClick={handleClickAway} />
        )}
      </Box>
    </ClickAwayListener>
  );
};

export default SearchInput;
