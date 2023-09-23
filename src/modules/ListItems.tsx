import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {Box, ButtonBase, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import {DownloadOutlined, Lock, LockOpen} from "@mui/icons-material";
import {useEffect, useState} from "react";
import CardItem from "../components/CardItem";

export default function ListItems() {
    const theme = useTheme()
    const matches_min_md = useMediaQuery(theme.breakpoints.up("md"))
    const matches_max_md = useMediaQuery(theme.breakpoints.down("md"))
    const isMin_xl = useMediaQuery(theme.breakpoints.up("xl"))
    const isMin_lg = useMediaQuery(theme.breakpoints.up("lg"))
    const isMin_md = useMediaQuery(theme.breakpoints.up("md"))
    const isMin_sm = useMediaQuery(theme.breakpoints.up("sm"))
    const isMin_xs = useMediaQuery(theme.breakpoints.up("xs"))

    const isMax_md = useMediaQuery(theme.breakpoints.down("md"))
    const isMax_lg = useMediaQuery(theme.breakpoints.down("lg"))


    useEffect(()=>{
        console.log(`Screen size is larger than Medium`, matches_min_md)
        console.log(`Screen size is smaller than Medium`, matches_max_md)
    },[matches_min_md, matches_max_md])
    useEffect(()=>{
        console.log(`Screen size is larger than X-Large`, isMin_xl)
    },[isMin_xl])
    useEffect(()=>{
        console.log(`Screen size is larger than Large`, Boolean(isMin_lg))
    },[isMin_lg])
    useEffect(()=>{
        console.log(`Screen size is larger than Medium`)
    },[isMin_md])
    useEffect(()=>{
        console.log(`Screen size is smaller than Medium`, Boolean(isMax_md))
    },[isMax_md])
    useEffect(()=>{
        console.log(`Screen size is larger than X-Small`)
    },[isMin_xs])

    return (
        <ImageList sx={{
            width: "100%",
        //    height: 800
        }}
                   cols={isMin_lg ? 3: isMin_sm ? 2: 1}
                   //cols={{lg: 3, md: 2, xs: 1}}
                   rowHeight={"auto"}
                   gap={isMin_lg ? 18: 4}
        >
            {itemData.map((item) => (
                <ImageListItem key={item.img}
                                //cols={1.5}
                >
                    <CardItem img={item.img} title={item.title} type={item.type} />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

const itemData: {img: string; title: string; type: "free" | "premium"}[] = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Rockstar Guitarist',
        type: "premium"
        //title: 'Breakfast',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
        type: "premium"
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
        type: "free"
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        type: "premium"
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
        type: "free"
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
        type: "free"
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
        type: "premium"
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
        type: "premium"
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
        type: "free"
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
        type: "premium"
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
        type: "premium"
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
        type: "free"
    },
];