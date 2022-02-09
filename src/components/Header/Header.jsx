import { Styledheader } from "./Header.styled";
import { Container, ContainerFull } from "../../helpers/Container.styled";
import { Icons } from "../../helpers/Constants";

const Header = ({ darkTheme, toggleTheme }) => {
  return (
    <ContainerFull>
      <Container>
        <Styledheader>
          <h1>Where in the world? </h1>
          <div>
            <i
              className={darkTheme ? Icons.darkIcon : Icons.lightIcon}
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
