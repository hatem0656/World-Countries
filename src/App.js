import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyles from "./helpers/Global.styled";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { LightTheme, DarkTheme } from "./helpers/Constants";

function App() {
  const [darkTheme, toggleTheme] = useState(false);
  return (
    <Router>
      <ThemeProvider theme={darkTheme ? DarkTheme : LightTheme}>
        <>
          <GlobalStyles />
          <Header darkTheme={darkTheme} toggleTheme={toggleTheme} />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/details">
              <Details />
            </Route>
          </Switch>
        </>
      </ThemeProvider>
    </Router>
  );
}

export default App;
