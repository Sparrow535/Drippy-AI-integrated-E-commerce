export default function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-6 py-2 bg-white text-green-600 font-bold rounded-lg shadow-md hover:bg-gray-200 transition"
    >
      {text}
    </button>
  );
}
