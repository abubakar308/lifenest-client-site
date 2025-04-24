import DailyGoals from "../conponents/DailyGoals";
import MoodSelector from "../conponents/MoodSelector";
import SalahTraker from "../conponents/SalahTraker";


const Dashboar = () => {
  const today = new Date();
const time = today.toLocaleTimeString();
const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const monthIndex = today.getMonth(); // No need to +1
const monthName = monthNames[monthIndex];
const year = today.getFullYear();
const date = today.getDate();

const currentDate = `${date} ${monthName}, ${year}`; // Example: 24 April, 2025

return (
  <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md space-y-6">
    
    {/* Header with Date and Time */}
    <header className="flex flex-col items-center gap-1">
      <p className="text-lg font-semibold text-gray-800">{currentDate}</p>
      <p className="text-sm text-gray-500">{time}</p>
    </header>

     {/* Salah Tracker */}
     <div className="bg-gray-50 rounded-md shadow-sm">
      <SalahTraker />
    </div>

    {/* Mood Selector */}
    <div className="bg-gray-50 rounded-md shadow-sm">
      <MoodSelector />
    </div>

    {/* Daily Goals */}
    <div className="bg-gray-50 rounded-md shadow-sm">
      <DailyGoals />
    </div>

  </div>
    );
};

export default Dashboar;