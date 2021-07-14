import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import LanguageIcon from '@material-ui/icons/Language';
import CssBaseline from "@material-ui/core/CssBaseline";
import NativeSelect from '@material-ui/core/NativeSelect'
import {useTranslation} from 'react-i18next';

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

function LanguageSetting() {
    const classes = useStyles();
    const {t, i18n} = useTranslation();
    let lang = i18n.language
    const handleSelect = (e) => {
        let lang = e.target.value
        i18n.changeLanguage(lang).then()
    }
    return (
        <div className={classes.root}>
            <CssBaseline/>
            <h1 className={classes.h}>
                <LanguageIcon/> {t("languages")}
            </h1>
            <NativeSelect
                className={classes.select}
                onChange={handleSelect}
                defaultValue={lang}
            >
                <option value="zh">中文</option>
                <option value="en">English</option>
            </NativeSelect>
        </div>
    )
}

export default LanguageSetting
