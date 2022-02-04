// useEffect Cleanup: When we go to another page, the custom hook is still trying to fetch the data a that origins an unmounted component error. To fix this, we use the useEffect cleanup hook.

import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() =>{

    // 01. Abort controller
    const abortCont = new AbortController();

    // 02. Set the signal property as a second parameter of the fetch function
    fetch(url, { signal: abortCont.signal})
      .then(res =>{
        if(!res.ok) {
          throw Error('Could not fetch the data for that resource');
        }
        return res.json();
      })
      .then((data) =>{
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch(err =>{
        // 04. With an if statement, ensure to not keep fetching
        if (err.name === 'AbortError') {
          console.log('fetch aborted ')
        } else {
          setIsPending(false);
        setError(err.message);
        }
      })

    // 03. Set the cleanup function
    return () => abortCont.abort();

  }, [url]);

  return { data, isPending, error }
}

export default useFetch;