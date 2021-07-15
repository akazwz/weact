import React, {useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import BrightnessMediumIcon from '@material-ui/icons/BrightnessMedium';
import {useTranslation} from 'react-i18next';
import Divider from '@material-ui/core/Divider';
import Switch from '@material-ui/core/Switch';
import {setLight, setDark, typeValue} from "../redux/typeSlice";
import {useDispatch, useSelector} from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {},
    h: {
        display: "inline"
    },
    switch: {
        float: "right",
        fontSize: "large"
    }
}))

function DarkModeSetting() {
    const type = useSelector(typeValue)
    let switchState
    switch (type) {
        case 'light':
            switchState = false
            break
        case 'dark':
            switchState = true
            break
        default:
            switchState = false
    }
    const [checked, setChecked] = useState(switchState)
    const dispatch = useDispatch();
    const classes = useStyles();
    const {t} = useTranslation();

    const handleSwitchChanged = () => {
        if (checked) {
            setChecked(false)
            dispatch(setLight())
            localStorage.setItem('type', 'light')
        } else {
            setChecked(true)
            dispatch(setDark())
            localStorage.setItem('type', 'dark')
        }
    }
    return (
        <div className={classes.root}>
            <CssBaseline/>
            <h1 className={classes.h}>
                <BrightnessMediumIcon/> {t("dark-mode")}
                <Switch
                    className={classes.switch}
                    checked={checked}
                    onChange={handleSwitchChanged}
                    color="primary"
                />
            </h1>
            <Divider/>
        </div>
    )
}

export default DarkModeSetting
