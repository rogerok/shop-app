import React, { useState } from "react";

import { Box, InputAdornment, ClickAwayListener } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { StyledTextField } from "./SearchInput.styles";

import useDebounce from "../../../../hooks/useDebounce";
import SearchCatalog from "../SearchCatalog/SearchCatalog";

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isFocused, setIsFocused] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm.trim(), 500);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLocaleLowerCase());
  };
  const isActive = isFocused && debouncedSearchTerm;

  const handleClearInput = () => {
    setIsFocused(false);
    setSearchTerm("");
  };

  return (
    <ClickAwayListener onClickAway={handleClearInput}>
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
        {isActive && (
          <SearchCatalog
            onClick={handleClearInput}
            searchTerm={debouncedSearchTerm}
          />
        )}
      </Box>
    </ClickAwayListener>
  );
};

export default SearchInput;
