import React from 'react';
import {Backdrop, CircularProgress, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: theme.color,
    },
}))

// suspense fallback loading page
function Loading() {
    const classes = useStyles();
    return (
        <Backdrop open={true} className={classes.backdrop}>
            <CircularProgress color="inherit"/>
        </Backdrop>
    );
}

export default Loading;
