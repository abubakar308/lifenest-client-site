import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import SalahStreakMessage from "../conponents/SalahStreakMessage";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const SalahHistory = () => {
    const {user, loading} = useContext(AuthContext);
    const [salahData, setSalahData] = useState([]);
    

    const salahInfo = salahData.sort((a, b) => new Date(b.date) - new Date(a.date));

    useEffect(() => {
        if (!user?.email) return;
      
        fetch(`${import.meta.env.VITE_API_URL}/salah-data?email=${user?.email}`)
          .then(res => res.json())
          .then(result => {
            setSalahData(result);
          })
      }, [user]);
    return (
        <div className="max-w-md mx-auto">

<div className="flex gap-10 bg-gray-300">
<Link
    to="/profile"
    className="inline-flex items-center px-4 py-2"
  >
    <ArrowLeft size={18} />
    <span>Back</span>
  </Link>
    
    <h2 className="text-2xl font-semibold mb-2 text-center">🕌 Salah History</h2>
</div>

    <SalahStreakMessage salahData={salahData} />

    {loading ? (
      <p className="text-center text-base animate-pulse">Loading salah records...</p>
    ) : salahData?.length > 0 ? (
      salahInfo.map((salah) => (
        <div
          key={salah._id}
          className="p-4 space-y-3"
        >
          <p className="text-lg font-bold">📅 {salah?.date}</p>

          <div className="flex flex-col gap-2">
            {Object.entries(salah?.salahData || {}).map(([name, done]) => (
              <div
                key={name}
                className={`flex justify-between items-center p-3 rounded-lg border ${
                  done ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
                }`}
              >
                <span className="capitalize font-medium">{name}</span>
                <span className="text-xl">{done ? "✅" : "❌"}</span>
              </div>
            ))}
          </div>
        </div>
      ))
    ) : (
      <p className="text-center text-gray-600">No salah records found.</p>
    )}
            
        </div>
    );
};

export default SalahHistory;