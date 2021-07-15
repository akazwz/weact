import React, {Suspense} from "react";
import BottomNavBar from "./components/BottomNavBar";
import Loading from "./components/Loading";
import {Switch, Route} from "react-router-dom";
import {createTheme, ThemeProvider} from "@material-ui/core/styles";
import HomePage from "./pages/HomePage";
import NotFound from "./components/NotFound";
import TestPage from "./pages/TestPage";
import SettingPage from "./pages/SettingPage";
import {useSelector} from "react-redux";
import {typeValue} from "./redux/typeSlice";

function App() {
    const type = useSelector(typeValue)
    const theme = createTheme({
        palette: {
            type: type
        }
    })
    return (
        <Suspense fallback={<Loading/>}>
            <ThemeProvider theme={theme}>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/test" component={TestPage}/>
                    <Route exact path="/setting" component={SettingPage}/>
                    <Route exact component={NotFound}/>
                </Switch>
                <BottomNavBar/>
            </ThemeProvider>
        </Suspense>
    );
}

export default App;
