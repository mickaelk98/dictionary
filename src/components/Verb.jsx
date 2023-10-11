function Verb({ data }) {
  return (
    <div className="max-w-4xl mx-auto mt-7">
      <h2 className="text-4xl mb-7 relative title-style">verb</h2>
      <h4 className="mb-5 text-xl text-gray-400">Meaning</h4>
      <ul className="meaning">
        {data.meanings[1] &&
          data.meanings[1].definitions.map((item) => (
            <li key={item.definition}>{item.definition}</li>
          ))}
      </ul>
      <h4 className="my-5 text-xl text-gray-400">Sample</h4>
      <ul>
        {data.meanings[1] &&
          data.meanings[1].definitions.map((item) => (
            <li className="text-gray-400" key={item.example}>
              {item.example}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Verb;
