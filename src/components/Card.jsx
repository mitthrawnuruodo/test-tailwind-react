// components/Card.jsx
const Card = () => {
  return (
    <div className="max-w-sm mx-auto bg-blue-100 shadow-lg rounded-2xl p-6">
      <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">React + Tailwind Card</h2>
      <p className="text-gray-600 text-base mb-6">
        This is a simple card component styled with Tailwind CSS. It’s responsive and easy to customize.
      </p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl transition duration-300">
        Click Me
      </button>
    </div>
  );
};

export default Card;