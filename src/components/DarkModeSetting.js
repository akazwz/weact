import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import BrightnessMediumIcon from '@material-ui/icons/BrightnessMedium';
import {useTranslation} from 'react-i18next';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {},
    h: {
        display: "inline"
    },
    select: {
        float: "right",
        fontSize: "large"
    }
}))

function DarkModeSetting() {
    localStorage.setItem('type', 'light')
    const classes = useStyles();
    const {t} = useTranslation();

    const handleBtnClick = () => {
        localStorage.setItem('type', 'dark')
    }
    return (
        <div className={classes.root}>
            <CssBaseline/>
            <h1 className={classes.h}>
                <BrightnessMediumIcon/> {t("dark-mode")}
                <Button onClick={handleBtnClick}>切换 </Button>
            </h1>
        </div>
    )
}

export default DarkModeSetting
