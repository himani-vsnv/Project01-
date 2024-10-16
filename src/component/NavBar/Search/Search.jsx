import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Typography, IconButton, Container } from "@mui/material";
import axios from "axios";

const Search = () => {
  const [searchInput, setSearchData] = useState("");
  const [selectInput, setSelectInput] = useState([]);
  const [showBox, setShowBox] = useState(false);

  const SearchItemApi = async () => {
    const resp = await axios.get("https://fakestoreapi.com/products");
    console.log(resp.data);
    setSelectInput(resp.data);
  };

  useEffect(() => {
    SearchItemApi();
  }, [searchInput]);

  const handleSearch = (e) => {
    setSearchData(e.target.value);
    SearchItemApi();
  };

  const filterData = selectInput.filter((title) =>
    title.title.toLowerCase().includes(searchInput)
  );

  // const handleClick=()=>{}
  return (
    <>
      <Container>
        <TextField
          style={{ width: "520px", padding: "4px" }}
          placeholder="Search for products, brands and more"
          size="small"
          onChange={handleSearch}
          // variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <SearchIcon
                // onClick={handleClick}
                />
              </InputAdornment>
            ),
            style: { backgroundColor: "white" },
          }}
        />
        {searchInput.length > 0 && (
          <Box
            sx={{
              position: "absolute",
              top: "48px",
              backgroundColor: "white",
              padding: "2px",
              marginLeft: "4px",
              // marginRight:"3px",
              height: "350px",
              width: "516px",
              boxShadow: "5px 5px 7px rgba(.1,.1 ,.1,.1)",
            }}
          >
            <Box sx={{ borderBottom: "1px solid grey" }}>
              <Typography
                size="large"
                variant="text"
                color="black"
                padding="10px"
              >
                <IconButton size="small">
                  <SearchIcon />
                </IconButton>
                {filterData.slice(0, 6).map((searchItem) => (
                  <div onClick={(e) => setSearchData(searchItem.title)}>
                    <p noWrap>
                      {searchItem.title} <hr />
                    </p>
                  </div>
                ))}
              </Typography>
            </Box>
          </Box>
        )}
      </Container>
    </>
  );
};

export default Search;
