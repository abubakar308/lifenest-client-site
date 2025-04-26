import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Journal = () => {
  const [entry, setEntry] = useState("");
  const [saved, setSaved] = useState(false);
  const {user} = useContext(AuthContext);
  const today = new Date().toISOString().split("T")[0];


  const handleSave = () => {

  const data ={
    email: user?.email,
    data: today,
    entry
  }
  fetch(`${import.meta.env.VITE_API_URL}/journal`,
    {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    }
  ) .then(res => res.json())
  .then(result => {
    console.log("Saved entry:", result);
    setSaved(true);
    setEntry('');
  })
  .catch(error => {
    console.error("Error saving entry:", error);
  });
  };

  return (
    <div className="max-w-lg mx-auto p-6 mt-6 rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-center">📝 Daily Journal</h2>

      <textarea
        rows="8"
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        placeholder="Write your thoughts, reflections, or lessons of the day..."
        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      ></textarea>

      <button
        onClick={handleSave}
        disabled={!entry.trim() || saved}
        className="btn btn-primary mt-4 w-full disabled:bg-gray-400"
      >
        Save Entry
      </button>
    </div>
  );
};

export default Journal;
