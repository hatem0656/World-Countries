import { Styledheader } from "./Header.styled";
import { Container, ContainerFull } from "../../helpers/Container.styled";
const lightIcon = "bi bi-moon",
  darkIcon = "bi bi-moon-fill";
const Header = ({ darkTheme, toggleTheme }) => {
  return (
    <ContainerFull>
      <Container>
        <Styledheader>
          <h1>Where in the world? </h1>
          {console.log(darkTheme)}
          <div>
            <i
              className={darkTheme ? darkIcon : lightIcon}
              onClick={() => toggleTheme(!darkTheme)}
            ></i>
            <span>Dark Mode</span>
          </div>
        </Styledheader>
      </Container>
    </ContainerFull>
  );
};

export default Header;
