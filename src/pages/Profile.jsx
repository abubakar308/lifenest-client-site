import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import SalahStreakMessage from "../conponents/SalahStreakMessage";
import { Link, useNavigate } from "react-router-dom";


const Profile = () => {

    const { user, logOut } = useContext(AuthContext);


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
    

    return (
        <div className="text-2xl p-4 mb-8 max-w-md mx-auto">

  {/* Profile Card */}
  <div className="flex justify-between items-center flex-wrap gap-2">
    <div>
      <h2 className="text-xl font-semibold flex items-center gap-2">
         {user?.displayName}
      </h2>
      <p className="text-sm">{user?.email}</p>
    </div>

    <button
      onClick={handleLogout}
      className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition"
    >
      Logout
    </button>
  </div>

  <div className="max-w-md mx-auto border my-6 space-y-4">
    <h2 className="text-xl font-bold">📋 Your History</h2>
    <div className="space-y-2 bg-white rounded-xl">
      {[
        { to: "/salah-history", label: "🕌 Salah History" },
        { to: "/goals-history", label: "🎯 Daily Goals History" },
        // { to: "/mood-history", label: "😊 Mood History" },
        { to: "/journal-history", label: "📖 Journal Entries" },
      ].map(({ to, label }) => (
        <Link
          key={to}
          to={to}
          className="flex items-center justify-between p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
        >
          <span className="text-gray-800 font-medium">{label}</span>
          <span className="text-gray-400 text-lg">➡️</span>
        </Link>
      ))}
    </div>
  </div>
  {/* Trigger Button */}
<label htmlFor="feedback-modal" className="btn btn-outline btn-info">
  Give Feedback
</label>
{/* Modal */}
<input type="checkbox" id="feedback-modal" className="modal-toggle" />
<div className="modal max-w-md mx-auto">
  <div className="modal-box">
    <h3 className="font-bold text-lg">We value your feedback!</h3>
    <textarea className="textarea textarea-bordered w-full mt-3" placeholder="Write your thoughts..."></textarea>
    
    <div className="modal-action">
      <label htmlFor="feedback-modal" className="btn">Cancel</label>
      <label htmlFor="feedback-modal" className="btn btn-success">Submit</label>
    </div>
  </div>
</div>


      </div>
    );
};

export default Profile;