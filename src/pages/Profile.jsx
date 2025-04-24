import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import SalahStreakMessage from "../conponents/SalahStreakMessage";
import { useNavigate } from "react-router-dom";


const Profile = () => {

    const { user } = useContext(AuthContext);
    const [salahData, setSalahData] = useState([]);
    const [loading, setLoading] = useState(true); // <-- NEW

    const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.error("Logout failed:", error.message);
      });
  };
    
    useEffect(() => {
      if (!user?.email) return;
    
      fetch(`${import.meta.env.VITE_API_URL}/salah-data?email=${user?.email}`)
        .then(res => res.json())
        .then(result => {
          setSalahData(result);
          setLoading(false); // <-- DATA LOADED
        })
        .catch(() => setLoading(false)); // even on error, stop loading
    }, [user]);

    return (
        <div className="text-2xl p-4 max-w-md mx-auto space-y-6">

  {/* Profile Card */}
  <div className="flex justify-between items-center flex-wrap gap-2">
    <div>
      <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
         {user?.displayName}
      </h2>
      <p className="text-sm text-gray-500">{user?.email}</p>
    </div>

    <button
      onClick={handleLogout}
      className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
    >
      Logout
    </button>
  </div>

        <SalahStreakMessage salahData={salahData} />
    
        <h2 className="text-2xl font-semibold mb-2 text-center text-gray-400">🕌 Salah Tracker History</h2>
    
        {loading ? (
          <p className="text-center text-gray-400 text-base animate-pulse">Loading salah records...</p>
        ) : salahData?.length > 0 ? (
          salahData.map((salah) => (
            <div
              key={salah._id}
              className="p-4 space-y-3"
            >
              <p className="text-lg font-bold text-gray-700">📅 {salah?.date}</p>
    
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

export default Profile;