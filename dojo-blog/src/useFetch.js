import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);          // was named "blogs"
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw Error('Could not fetch data for that resource');
        }
        return res.json();
      })
      .then(data => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch(err => {
        setIsPending(false);
        setError(err.message);
      });
  }, [url]);                                       // re-fetch if the url changes

  return { data, isPending, error, setData };      // setData added for delete
};

export default useFetch;