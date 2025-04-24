import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import SalahStreakMessage from "../conponents/SalahStreakMessage";


const Profile = () => {

    const {user} = useContext(AuthContext);

    const [salahData, setSalahData] = useState([]);
    console.log(salahData)

    useEffect(()=>{
        fetch(`http://localhost:3000/salah-data?email=${encodeURIComponent(user?.email)}`)
        .then(res=>res.json())
        .then(result=>{
            console.log(result)
            setSalahData(result)
        })
    },[user,setSalahData]);

    return (
        <div className="text-2xl p-4 max-w-md mx-auto space-y-6">
             <SalahStreakMessage salahData={salahData}></SalahStreakMessage>
  <h2 className="text-3xl font-semibold mb-4 text-center">🧕🏻 Salah Tracker History</h2>

  <p className="text-center text-sm text-gray-500">{user?.email}</p>

  {salahData?.length > 0 ? (
    salahData.map((salah) => (
      <div
        key={salah._id}
        className="border p-4 rounded-xl bg-white shadow space-y-3"
      >
        <div className="flex justify-between items-center">
          <p className="text-lg font-bold">📅 {salah?.date}</p>
        </div>

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