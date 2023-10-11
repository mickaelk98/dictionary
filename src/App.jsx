import { useFetchDictionary } from "./hooks/useFetchDictionary";
import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Word from "./components/Word";
import Name from "./components/Name";
import Verb from "./components/Verb";
import Source from "./components/Source";

function App() {
  const [dictionary, setDictionary] = useState("keyboard");
  const data = useFetchDictionary(dictionary);

  console.log(data);

  return (
    <>
      <Header />
      <SearchBar setDictionary={setDictionary} />
      <Word data={data} />
      <Name data={data} />
      <Verb data={data} />
      <Source data={data} />
    </>
  );
}

export default App;
