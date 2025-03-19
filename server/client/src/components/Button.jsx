export default function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-16 py-4 bg-customColor2 text-gray-800 text-xl font-bold rounded-[30px] shadow-md hover:bg-gray-200 transition"
    >
      {text}
    </button>
  );
}
