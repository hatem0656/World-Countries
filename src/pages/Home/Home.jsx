import Dropdown from "../../components/Dropdown/Dropdown";
import SearchField from "../../components/SearchField/SearchField";
import Card from "../../components/Card/Card";
import { Container } from "../../helpers/Container.styled";
import Flex from "../../helpers/Flex.styled";

const Home = () => {
  return (
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
  );
};

export default Home;
