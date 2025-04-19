import DailyGoals from "../conponents/DailyGoals";
import MoodSelector from "../conponents/MoodSelector";
import SalahTraker from "../conponents/SalahTraker";


const Dashboar = () => {
    const today = new Date();
    const time = new Date().toLocaleTimeString();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let monthIndex = today.getMonth()+1;
    let monthName = monthNames[monthIndex];

const year = today.getFullYear();
const date = today. getDate();
const currentDate = date + "/" + monthName + "/" + year;
    return (
        <div>
          <header className="flex justify-center gap-3">
        <p>{currentDate}</p>
        <p>{time}</p>
          </header>
          
          {/* mood selector */}
          <MoodSelector />

        {/* salah traher */}
        <SalahTraker />

        <DailyGoals />

        </div>
    );
};

export default Dashboar;