import React, {useState, useEffect} from 'react';
import {AppBar, BottomNavigation, BottomNavigationAction, makeStyles, Toolbar} from '@material-ui/core';
import {useLocation, Link} from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';

// style fix it bottom
const useStyles = makeStyles(() => ({
    appBar: {
        top: 'auto',
        bottom: 0,
        margin: 0,
        padding: 0,
        backgroundColor: 'transparent'
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
            case '/test':
                setValue(1);
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
                        <BottomNavigationAction label="Home" icon={<HomeIcon/>} component={Link} to="/"/>
                        <BottomNavigationAction label="Home" icon={<HomeIcon/>} component={Link} to="/test"/>
                        <BottomNavigationAction label="Home" icon={<HomeIcon/>} component={Link} to="/"/>
                        <BottomNavigationAction label="Setting" icon={<SettingsIcon/>} component={Link} to="/setting"/>
                    </BottomNavigation>
                </Toolbar>
            </AppBar>
            <Toolbar className={classes.toolBarNone}/>
        </React.Fragment>
    );
}

export default BottomNavBar
