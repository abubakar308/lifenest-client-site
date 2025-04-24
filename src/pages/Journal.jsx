import { useState } from "react";

const Journal = () => {
  const [entry, setEntry] = useState("");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    // এখানে তুমি চাইলে MongoDB/localStorage এ save করতে পারো
    console.log("Saved entry:", entry);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000); // 2 sec পর saved message চলে যাবে
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 mt-6 shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">📝 Daily Journal</h2>

      <textarea
        rows="8"
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        placeholder="Write your thoughts, reflections, or lessons of the day..."
        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      ></textarea>

      <button
        onClick={handleSave}
        disabled={!entry.trim()}
        className="btn btn-primary mt-4 w-full disabled:bg-gray-400"
      >
        Save Entry
      </button>

      {saved && (
        <p className="text-green-600 text-center mt-2 font-medium">
          ✅ Journal saved!
        </p>
      )}
    </div>
  );
};

export default Journal;
