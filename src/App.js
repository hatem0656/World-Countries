import GlobalStyles from "./helpers/Global.styled";
import Dropdown from "./components/Dropdown/Dropdown";
import Header from "./components/Header/Header";
import SearchField from "./components/SearchField/SearchField";
import Card from "./components/Card/Card";
import { Container } from "./helpers/Container.styled";
import Flex from "./helpers/Flex.styled";
import { ThemeProvider } from "styled-components";
import { useState } from "react";

const LightTheme = {
  mainColor: "hsl(0, 0%, 98%)",
  secondaryColor: "hsl(0, 0%, 100%)",
  fontColor: "hsl(200, 15%, 8%)",
  hoverColor: "hsl(0, 12% ,80% , 48%)",
  boxShadow: "0px 0px 7px 0px hsl(0deg 0% 52% / 24%)",
};
const DarkTheme = {
  mainColor: "hsl(207, 26%, 17%)",
  secondaryColor: "hsl(209, 23%, 22%)",
  fontColor: "hsl(0, 0%, 100%)",
  hoverColor: "hsl(0, 12% ,80% , 48%)",
};
function App() {
  const [darkTheme, toggleTheme] = useState(false);
  return (
    <ThemeProvider theme={darkTheme ? DarkTheme : LightTheme}>
      <>
        <GlobalStyles />
        <Header darkTheme={darkTheme} toggleTheme={toggleTheme} />
        <Container>
          <Flex justify="space-between" width="100%">
            <SearchField />
            <Dropdown />
          </Flex>
          <Flex justify="space-between" width="100%" margin="40px 0 0">
            <Card />
            <Card />
            <Card />
            <Card />
          </Flex>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
