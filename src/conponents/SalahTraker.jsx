import { useState } from "react";

const SalahTraker = () => {

    const salahList = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];
const [salahStatus, setSalahStatus] = useState({
  Fajr: false,
  Dhuhr: false,
  Asr: false,
  Maghrib: false,
  Isha: false,
});

const handleCheckboxChange = (name) => {
  setSalahStatus(prev => ({
    ...prev,
    [name]: !prev[name]
  }));
};
    return (
        <div className="p-4 text-center">
        <h2 className="text-lg font-semibold mb-2">🕌 Salah Tracker</h2>
        <div className="flex flex-col gap-2 p-6">
          {salahList.map((salah) => (
            <label key={salah} className="flex border p-2 bg-white items-center gap-2">
              <input
                type="checkbox"
                checked={salahStatus[salah]}
                onChange={() => handleCheckboxChange(salah)}
                className="checkbox checkbox-primary"
              />
              <span>{salah}</span>
            </label>
          ))}
        </div>
      </div>
    );
};

export default SalahTraker;