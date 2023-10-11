function Source({ data }) {
  return (
    <div className="max-w-4xl mx-auto my-10 pt-5 source">
      <div className="flex items-center gap-5">
        <p className="text-gray-400">Source:</p>

        {data.sourceUrls.map((source) => (
          <a target="_blank" rel="noreferrer" href={`${source}`} key={source}>
            {source}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Source;
