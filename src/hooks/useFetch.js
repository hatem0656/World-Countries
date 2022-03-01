import { useEffect, useState } from "react";
import axios from "axios";
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        // console.log(response);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        // console.log(err);
      });
  }, [url]);
  return { loading, data, error };
}

export default useFetch;
