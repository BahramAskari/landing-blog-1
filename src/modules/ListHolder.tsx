import React from 'react';
import logo from './logo.svg';
import {Box, ButtonBase, Divider, Grid, Stack, Typography} from "@mui/material";
import {Bookmark, Bookmarks, Favorite, Filter, FilterList, List} from "@mui/icons-material";
import ListItems from "./ListItems";

export default function ListHolder() {
  return (
  <Box component={"div"}
       pt={1.4} pb={1.4}
       pl={{xl: 21, lg: 17, md: 12, xs: 1.8}}
       pr={{xl: 21, lg: 17, md: 12, xs: 1.8}}
  >

      <Stack spacing={1.2}>
          {/*   Begin Filter Bar    */}
          <Box mb={1.5}>
            <Grid container
                  justifyContent={"space-between"}
            >
                <Grid item gap={1.2}>
                    <Box display={"flex"}
                         gap={3.2}
                    >
                        <ButtonBase>
                    <Typography>Latest</Typography>
                        </ButtonBase>
                        <ButtonBase>
                    <Typography>Popular</Typography>
                        </ButtonBase>

                        <Divider orientation="vertical" flexItem light={true} />

                        <ButtonBase>
                    <Typography color={"red"}>Premium</Typography>
                        </ButtonBase>
                        <ButtonBase>
                    <Typography color={"blue"}>Free</Typography>
                        </ButtonBase>
                    </Box>
                </Grid>
                <Grid item gap={1.2}>
                    <Box display={"flex"}
                         gap={1.2}
                    >
                    <FilterList />
                    <Bookmarks />
                    </Box>
                </Grid>
            </Grid>
          </Box>
          {/*   End Filter Bar    */}

          {/*   Begin Items List    */}
          <ListItems />
          {/*   End Items List    */}

          {/*   Begin List Pagination    */}
          {/*   End List Pagination    */}
      </Stack>

      <Grid container>

          <Grid item>

          </Grid>
          <Grid item>

          </Grid>

      </Grid>

  </Box>
  );
}