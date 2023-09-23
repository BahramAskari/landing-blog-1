import React from 'react';
import logo from '../logo.svg';
import {Box, Button, Grid, IconButton, Typography, useMediaQuery, useTheme} from "@mui/material";
import {Telegram, WhatsApp} from "@mui/icons-material";

function Header() {
    const theme = useTheme()
    const isMin_sm = useMediaQuery(theme.breakpoints.up("sm"))
    const isMin_md = useMediaQuery(theme.breakpoints.up("md"))
    const isMax_md = useMediaQuery(theme.breakpoints.down("md"))

  return (
  <Box component={"header"}
       pt={1.4} pb={1.4}
       pl={{xl: 21, lg: 17, md: 12, xs: 1.8}}
       pr={{xl: 21, lg: 17, md: 12, xs: 1.8}}
  >

      <Grid container
            justifyContent={"space-between"}
            alignItems={"center"}
      >

          <Grid item>
              <Box display={"flex"}
                   alignItems={"center"}
                   gap={{sm: 2.1, xs: 1}}
              >

              <img src={logo} alt={"Logo"}
                   style={{
                       height: "60px",
                       width: "60px",
                   }}
              />

                  <Box>
                      <Typography>Vectors</Typography>
                  </Box>
                  <Box>
                      <Typography>Photos</Typography>
                  </Box>
                  <Box>
                      <Typography>Video</Typography>
                  </Box>

              </Box>
          </Grid>


          <Grid item>
              <Box display={"flex"}
                   gap={1.2}
                   alignItems={"center"}
              >
                  {isMin_sm &&
                    <Button variant={"outlined"} color={"inherit"} size={"medium"}>Login</Button>
                  }

                  <Box display={"flex"}
                       gap={0.4}
                       alignItems={"center"}
                  >
              <IconButton color="primary" sx={{ p: '2px' }} aria-label="directions">
                  <Telegram fontSize={"medium"} />
              </IconButton>
                  <IconButton color="success" sx={{ p: '2px' }} aria-label="directions">
                      <WhatsApp fontSize={"medium"} />
                  </IconButton>
                  </Box>

              </Box>
          </Grid>

      </Grid>

  </Box>
  );
}

export default Header;
