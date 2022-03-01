import Dropdown from "../../components/Dropdown/Dropdown";
import SearchField from "../../components/SearchField/SearchField";
import Card from "../../components/Card/Card";
import { Container } from "../../helpers/Container.styled";
import Flex from "../../helpers/Flex.styled";
// import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCountries } from "../../features/countries";
import Grid from "../../helpers/Grid.styled";

const Home = () => {
  // const {loading, data: countries, error,} = useFetch("https://restcountries.com/v3.1/all");
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.value);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!countries) {
      setLoading(true);
      axios
        .get("https://restcountries.com/v3.1/all")
        .then((response) => {
          setLoading(false);
          dispatch(setCountries(response.data));
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Flex justify="space-between" width="100%">
        <SearchField />
        <Dropdown />
      </Flex>

      {countries && (
        <Grid width="100%" margin="40px 0 0">
          {countries.map((country) =>
            country.name.common === "Israel" ? null : (
              <Card id={country.cca3} key={country.cca3} country={country} />
            )
          )}
        </Grid>
      )}

      {error && <div>{error.message}</div>}
      {loading && <div> Loading..</div>}
    </Container>
  );
};

export default Home;
