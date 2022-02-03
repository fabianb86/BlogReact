// Making a custom hook: We put the state and effect hook here in an independent file, to be usable in other components.

// 01. Import useState and useEffect
import { useState, useEffect } from "react";

// 02. Creating a custom hook to store the logic. Always starts with the word "use". After that, bring the states and the useEffect made at home.js file
const useFetch = (url) => {

  // 04. Change blogs for data, in order to to fetch a different type of resource
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() =>{
    // 06. Set url in order to be usable in any component
    fetch(url)
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
        setIsPending(false);
        setError(err.message);
      })
  }, [url]);

  // 05.
  return { data, isPending, error }
}

// 03. Export useFetch
export default useFetch;