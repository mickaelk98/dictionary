function Name({ data }) {
  return (
    <div className="max-w-4xl mx-auto mt-7">
      <h2 className="text-4xl mb-7 relative title-style">noum</h2>
      <h4 className="mb-5 text-xl text-gray-400">Meaning</h4>
      <ul className="meaning">
        {data.meanings[0].definitions.map((item) => (
          <li key={item.definition}>{item.definition}</li>
        ))}
      </ul>
      <h4 className="my-5 text-xl text-gray-400">Synonyms</h4>
      <ul className="flex flex-wrap gap-x-4 gap-y-2 text-purple-400">
        {data.meanings[0].synonyms.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Name;
