import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-hot-toast";

const goalsList = [
  "📖 Read Qur'an",
  "🧎 Pray all Salah",
  "📚 Study 1 hour",
  "💪 Exercise",
  "😊 Help someone",
];

const DailyGoals = () => {
  const { user } = useContext(AuthContext);
  const today = new Date().toISOString().split("T")[0];
  const [selectedGoals, setSelectedGoals] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (!user?.email) return;
    fetch(`${import.meta.env.VITE_API_URL}/daily-goals?email=${user.email}&date=${today}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.goals) {
          setSelectedGoals(data.goals);
          setIsSubmitted(true);
        }
      });
  }, [user, today]);

  const handleSelect = (goal) => {
    if (isSubmitted) return;
    setSelectedGoals((prev) =>
      prev.includes(goal) ? prev : [...prev, goal]
    );
  };

  const handleSubmit = async () => {
    if (selectedGoals.length === 0) return toast.error("Select at least one goal.");
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/daily-goals`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: user?.email,
          date: today,
          goals: selectedGoals,
        }),
      });

      if (res.ok) {
        toast.success("✅ Goals saved successfully!");
        setIsSubmitted(true);
      } else {
        const data = await res.json();
        toast.error(data.message || "Error submitting goals.");
      }
    } catch (err) {
      toast.error("Something went wrong.");
    }
  };

  return (
    <div className="max-w-md mx-auto mb-10 text-center">
      <h2 className="text-2xl font-bold mb-4">🎯 Daily Goals</h2>

      <div className="space-y-3 mb-4">
        {goalsList.map((goal, i) => (
          <label
            key={i}
            className={`flex items-center gap-3 p-3 rounded-lg border transition cursor-pointer ${
              selectedGoals.includes(goal)
                ? "bg-green-100 text-green-800 border-green-300"
                : "border-gray-300 hover:bg-gray-50"
            }`}
          >
            <input
              type="checkbox"
              checked={selectedGoals.includes(goal)}
              onChange={() => handleSelect(goal)}
              disabled={isSubmitted}
              className="checkbox checkbox-success"
            />
            <span className="text-lg">{goal}</span>
          </label>
        ))}
      </div>

      <button
        className="btn btn-success w-full disabled:bg-gray-400"
        onClick={handleSubmit}
        disabled={isSubmitted}
      >
        {isSubmitted ? "✅ Goals Submitted" : "Save"}
      </button>
    </div>
  );
};

export default DailyGoals;
