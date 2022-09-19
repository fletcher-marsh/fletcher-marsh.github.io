import React from 'react';
import {Box} from "@mui/material";

function EmojiBullet(props) {
    const {emoji, display, text} = props;

    return (
        <Box component={'li'} fontSize={'1rem'} lineHeight={1.5} style={{cursor: 'default'}}>
            <Box component={'span'} aria-label="cheese"
                 role="img"
                 mr={{xs: '0.5rem', md: '1rem'}} fontSize={'1rem'}>{emoji}</Box> <a href={text}>{display}</a>
        </Box>
    );
}

export default EmojiBullet;