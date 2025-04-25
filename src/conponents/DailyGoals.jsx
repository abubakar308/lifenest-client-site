import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const goalsList = [
  "Read Qur'an",
  "Pray on time",
  "Help someone",
  "Avoid gossip",
  "Say Alhamdulillah 100x",
];

const DailyGoals = () => {
  const [goals, setGoals] = useState([]);

  const toggleGoal = (goal) => {
    setGoals((prev) =>
      prev.includes(goal) ? prev.filter((g) => g !== goal) : [...prev, goal]
    );
  };

useEffect(() => {
  if (goals.length > 0) {
    toast.success(`✅ You’ve completed ${goals.length} of ${goalsList.length} goals today!`);
  }
}, [goals]);


  return (
    <div className="max-w-md mx-auto m-10 mt-4 text-center">
      <h2 className="text-2xl font-bold mb-4">🎯 Daily Goals</h2>

      <div className="space-y-3">
        {goalsList.map((goal, index) => (
          <label
            key={index}
            className={`flex items-center gap-3 p-3 rounded-lg border transition cursor-pointer 
              ${
                goals.includes(goal)
                  ? "bg-green-100 text-green-800 border-green-300"
                  : "border-gray-300"
              }`}
          >
            <input
              type="checkbox"
              checked={goals.includes(goal)}
              onChange={() => toggleGoal(goal)}
              className="checkbox checkbox-success"
            />
            <span className="text-lg">{goal}</span>
          </label>
        ))}
      </div>

    </div>
  );
};

export default DailyGoals;
