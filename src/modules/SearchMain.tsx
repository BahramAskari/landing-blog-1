import React from 'react';
import logo from './logo.svg';
import {
    Box, Grid, TextField, InputAdornment,
    IconButton, Select, FormControl,
    MenuItem, Paper, Divider,
    InputBase, SelectChangeEvent,
} from "@mui/material";
import {AccountCircle, Directions, Search, SearchOutlined, Telegram,} from "@mui/icons-material";

const items = [
    {id: 1, name: "Photos"},
    {id: 2, name: "Vectors"},
    {id: 3, name: "Videos"},
]
export default function SearchMain() {
    const [age, setAge] = React.useState('2');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    return (
      <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%" }}
      >
          <FormControl sx={{ m: 1, minWidth: 120 }}>
              <Select
                  size={"small"}
                  value={age}
                   onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Search Bar' }}
              >
                  {/*
                              <MenuItem value="">
                                  <em>None</em>
                              </MenuItem>
                              */}
                  {items.map(item=> <MenuItem key={item.id+item.name} value={item.id}>{item.name}</MenuItem>)}
              </Select>
          </FormControl>

          <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder={"Search "+ items.filter(item=>item.id===Number(age))[0].name}
              inputProps={{ 'aria-label': 'search google maps' }}
          />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton sx={{
              p: '10px',
              transition: "all .75s",
              '&:hover': {
                  background: "#889",
                  color: "#fff",
                  transform: "rotate(360deg)",
                  transition: "all .75s",
              }
          }}
                type="submit"
                aria-label="search"
          >
              <SearchOutlined />
          </IconButton>
      </Paper>
  );
}
