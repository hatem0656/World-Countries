import { Styledheader } from "./Header.styled";
import { Container, ContainerFull } from "../../helpers/Container.styled";
import { Icons } from "../../helpers/Constants";
import { Icon } from "@iconify/react";

const Header = ({ darkTheme, toggleTheme }) => {
  return (
    <ContainerFull>
      <Container>
        <Styledheader>
          <h1>Where in the world? </h1>
          <div>
            <Icon
              icon={darkTheme ? Icons.darkIcon : Icons.lightIcon}
              onClick={() => toggleTheme(!darkTheme)}
            ></Icon>
            <span>Dark Mode</span>
          </div>
        </Styledheader>
      </Container>
    </ContainerFull>
  );
};

export default Header;
