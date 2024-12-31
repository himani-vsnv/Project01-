import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { Container } from "@mui/material";

const Search = () => {
  return (
    <>
      <Container>
        <TextField
          style={{ width: "520px", padding: "4px" }}
          placeholder="Search for products, brands and more"
          size="small"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            style: { backgroundColor: "white" },
          }}
        />
      </Container>
    </>
  );
};

export default Search;
