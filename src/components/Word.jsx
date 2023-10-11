import { BsFillPlayFill } from "react-icons/bs";

function Word({ data }) {
  return (
    <div className="max-w-4xl mx-auto flex items-center justify-between mt-10">
      <div>
        <h1 className="text-5xl">{data.word}</h1>
        <p className="text-purple-700 text-2xl mt-2">{data.phonetic}</p>
      </div>
      <div className="w-[80px] h-[80px] bg-purple-200 rounded-full flex items-center justify-center cursor-pointer">
        <div className="text-4xl text-purple-900">
          <BsFillPlayFill />
        </div>
      </div>
    </div>
  );
}

export default Word;
