import axios from "axios";
async function getCountry(url) {
  axios
    .get(url)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch(() => {
      return null;
    });
}

export default getCountry;
