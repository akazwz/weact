import React, {useState, useEffect} from 'react';
import {AppBar, BottomNavigation, BottomNavigationAction, makeStyles, Toolbar} from '@material-ui/core';
import {useLocation, Link} from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import CenterFocusStrongIcon from '@material-ui/icons/CenterFocusStrong';
import BugReportIcon from '@material-ui/icons/BugReport';
import {useTranslation} from 'react-i18next';
// style fix it bottom
const useStyles = makeStyles(() => ({
    appBar: {
        top: 'auto',
        bottom: 0,
        margin: 0,
        padding: 0,
        backgroundColor: 'transparent',
    },
    toolBar: {
        width: '100%',
        height: '100%',
        padding: 0,
        margin: 0,
        backgroundColor: 'transparent',
    },
    bng: {
        width: '100%',
        height: '100%',
        margin: 0,
        padding: 0,
    },
    toolBarNone: {},
    bna: {},
}))

// bottom navigation bar, use to change route
function BottomNavBar() {
    const classes = useStyles();
    const {t} = useTranslation();
    // useState to control bottom navigation action`s state
    const [value, setValue] = useState(0);
    // get route pathname
    let location = useLocation();

    // useEffect when location changed,change bna`s state
    useEffect(() => {
        switch (location.pathname) {
            case '/':
                setValue(0);
                break;
            case '/qrcode':
                setValue(1);
                break;
            case '/test':
                setValue(2);
                break;
            case '/setting':
                setValue(3);
                break;
            default:
                setValue(0);
        }
    }, [location]);

    return (
        <React.Fragment>
            <AppBar
                position="fixed"
                color="primary"
                className={classes.appBar}>
                <Toolbar className={classes.toolBar}>
                    <BottomNavigation
                        value={value}
                        className={classes.bng}>
                        <BottomNavigationAction label={t('bottom.home')} icon={<HomeIcon/>} component={Link}
                                                to="/"/>
                        <BottomNavigationAction label={t('bottom.qrcode')} icon={<CenterFocusStrongIcon/>} component={Link}
                                                to="/qrcode"/>
                        <BottomNavigationAction label={t('bottom.test')} icon={<BugReportIcon/>} component={Link}
                                                to="/test"/>
                        <BottomNavigationAction label={t('bottom.setting')} icon={<SettingsIcon/>} component={Link}
                                                to="/setting"/>
                    </BottomNavigation>
                </Toolbar>
            </AppBar>
            <Toolbar className={classes.toolBarNone}/>
        </React.Fragment>
    );
}

export default BottomNavBar;
