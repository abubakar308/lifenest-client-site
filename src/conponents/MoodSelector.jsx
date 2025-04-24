import { useState } from "react";

const MoodSelector = () => {
  const [selectedMood, setSelectedMood] = useState("");

  const moods = [
    { icon: "😊", label: "Happy" },
    { icon: "😔", label: "Sad" },
    { icon: "😠", label: "Angry" },
    { icon: "🤩", label: "Excited" },
    { icon: "😴", label: "Sleepy" },
  ];

  return (
    <div className="text-center mt-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">How are you feeling?</h2>
      <div className="flex justify-center gap-4 flex-wrap">
        {moods.map((mood, i) => (
          <button
            key={i}
            onClick={() => setSelectedMood(mood.icon)}
            className={`w-16 h-16 flex items-center justify-center text-3xl rounded-full border-2 transition-all duration-200 shadow-sm hover:scale-110
            ${
              selectedMood === mood.icon
                ? "bg-blue-100 border-blue-500 text-blue-600"
                : "border-gray-300 hover:bg-gray-100"
            }`}
            title={mood.label}
          >
            {mood.icon}
          </button>
        ))}
      </div>

      {selectedMood && (
        <p className="mt-4 text-lg font-medium text-blue-700">
          You selected: <span className="text-2xl">{selectedMood}</span>
        </p>
      )}
    </div>
  );
};

export default MoodSelector;
