import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Box, Stack, Typography} from "@mui/material";
import Header from "./modules/Header";
import SearchMain from "./modules/SearchMain";
import ListHolder from "./modules/ListHolder";

function Home() {
  return (
      <Box>

          <Header />

    <Box //pl={{md: 4, xs: .2}}
         //pr={{md: 4, xs: .2}}
         width={"100%"}
    >

        <Box width={{md: "40%", xs: "90%"}}
             margin={"0 auto"}
             mb={3}
        >
        {/* main top introduce content */}
        <Stack spacing={3.5} textAlign={"center"}
               justifyContent={"center"}
        >
            <Box>
                <Typography variant={"h4"}
                            fontWeight={"bold"}
                            letterSpacing={{md: "0.132em", xs: "normal"}}
                >
                    Popular Pro Stock Vectors
                </Typography>
            </Box>
            <Box>
                <Box width={{md: "60%", xs: "100%"}}
                     ml={"auto"} mr={"auto"}>
                <Typography variant={"caption"}
                            fontSize={"small"}
                >
                    High quality Vectors with worry-free licensing for personal and commercial use.
                </Typography>
                </Box>
            </Box>

            <SearchMain/>
        </Stack>
        {/* main Search module */}


        </Box>
        {/* List Plans */}
        <ListHolder />

    </Box>

      </Box>
  );
}

export default Home;
