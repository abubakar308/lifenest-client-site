import { useState } from "react";

const MoodSelector = () => {
    const [mood, setMood] = useState('');
    return (
        <div className="text-center">
           
           <h2 className="text-2xl text-center">Mood Select</h2>
           <div className="flex justify-center gap-2">
  {["😊", "😔", "😠", "🤩", "😴"].map((mood, i) => (
    <button
      key={i}
      onClick={() => setMood(mood)}
      className={`text-2xl p-2 rounded-full border hover:bg-blue-100`}
    >
      {mood}
    </button>
  ))}
</div>
        </div>
    );
};

export default MoodSelector;