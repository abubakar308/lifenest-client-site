import { useEffect, useState } from "react";

const SalahStreakMessage = ({salahData}) => {
    console.log(salahData)
        const [streakMessage, setStreakMessage] = useState("");

  useEffect(() => {
    if (!salahData || salahData.length === 0) return;

    const sortedData = [...salahData].sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );

    let streak = 0;
    let maxStreak = 0;

    for (let i = 0; i < sortedData.length; i++) {
      const salahs = sortedData[i].salahData;
      const allFiveDone = Object.values(salahs).every((val) => val === true);

      if (allFiveDone) {
        streak++;
        maxStreak = Math.max(maxStreak, streak);
      } else {
        streak = 0;
      }
    }

    if (maxStreak >= 40) {
      setStreakMessage("🌟 Allahu Akbar! আপনি ৪০ দিন একটানা পাঁচ ওয়াক্ত সালাত আদায় করেছেন!");
    } else if (maxStreak >= 20) {
      setStreakMessage("🕌 BarakAllah! আপনি ২০ দিন সালাত মিস করেননি!");
    } else if (maxStreak >= 10) {
      setStreakMessage("✨ MashAllah! আপনি ১০ দিন একটানা সালাত আদায় করেছেন!");
    } else {
      setStreakMessage("");
    }
  }, [salahData]);

  if (!streakMessage) return null;

  return (
    <div className="bg-green-100 text-green-800 border border-green-300 p-4 rounded-xl my-4 text-center shadow-md">
      <p className="text-xl font-semibold">{streakMessage}</p>
    </div>
    );
};

export default SalahStreakMessage;