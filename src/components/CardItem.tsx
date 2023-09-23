import {Box, ButtonBase, Stack, Typography} from "@mui/material";
import {DownloadOutlined, Lock, LockOpen} from "@mui/icons-material";
import * as React from "react";


export default function CardItem (props: {img: string; title: string; type: "free" | "premium"}) {

    return(
        <Box p={1.8}
             sx={{
                 background: "#fff",
                 border: "1px solid #eee",
                 borderRadius: 3.1,
             }}
        >
            <Stack spacing={0.8}
            >
                <Box //width={240}
                    width={"100%"}
                    height={240}
                    overflow={"hidden"}
                    margin={"0 auto"}
                    position={"relative"}
                >
                    <img
                        src={`${props.img}?w=250&h=240&fit=crop&auto=format`}
                        srcSet={`${props.img}?w=250&h=240&fit=crop&auto=format&dpr=2 2x`}
                        alt={props.title}
                        loading="lazy"
                        style={{
                            width: "100%",
                            borderRadius: "12.4px",
                            objectFit: "cover",
                        }}
                    />
                    <Box position={"absolute"}
                         display={"flex"}
                         alignItems={"center"}
                         gap={.8}
                         top={10}
                         right={10}
                         p={0.8}
                         borderRadius={3}
                         sx={{
                             background: "#eee",
                         }}
                    >
                        {props.type ==="free" ?
                            <LockOpen />
                           :
                            <Lock />
                        }
                        {props.type}
                    </Box>
                </Box>
                <Box textAlign={"center"}
                     display={"flex"}
                     justifyContent={"center"}
                     alignItems={"baseline"}
                >
                    <Typography variant={"h2"}>{props.title.substring(0,1)}</Typography>
                    <Typography variant={"subtitle2"}>{props.title.substring(1)}</Typography>
                </Box>
                <Box display={"flex"} gap={4}
                     justifyContent={"center"}
                >
                    <ButtonBase>
                        <Typography variant={"h6"} fontWeight={"bold"}>Download</Typography>
                        <DownloadOutlined />
                    </ButtonBase>
                </Box>
            </Stack>
        </Box>
    )
}