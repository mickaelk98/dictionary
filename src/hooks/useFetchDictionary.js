import { useEffect, useState } from "react";

export function useFetchDictionary(value) {
  const [data, setData] = useState([]);

  useEffect(() => {
    let shouldCancel = false;
    async function fetchDictionary() {
      try {
        const response = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${value}`
        );

        if (response.ok) {
          const body = await response.json();
          if (!shouldCancel) {
            setData(body.slice(0, 1));
          }
        } else {
          console.log("Erreur");
        }
      } catch (e) {
        console.log(e);
      }
    }

    fetchDictionary();
    return () => {
      shouldCancel = true;
    };
  }, [value]);

  return data[0];
}
