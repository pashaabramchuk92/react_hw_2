import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    setData(data);
  }, [url]);

  return { data }
}

export default useFetch;