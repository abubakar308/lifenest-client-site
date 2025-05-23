import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import SalahStreakMessage from "../conponents/SalahStreakMessage";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


const Profile = () => {

    const { user, logOut } = useContext(AuthContext);
    const [feedbackText, setFeedbackText] = useState("")
    const today = new Date()

console.log(feedbackText)
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

  const handleFeedbackSubmit = () => {
    const feedback = { email: user?.email, message: feedbackText, date: today };
    fetch(`${import.meta.env.VITE_API_URL}/feedback`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(feedback)
    })
    .then(res => res.json())
    .then(result => {
      toast.success("Thanks for your feedback!");
      setFeedbackText(""); // Clear after submit
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
    <div className="space-y-2 rounded-xl">
      {[
        { to: "/salah-history", label: "🕌 Salah History" },
        { to: "/goals-history", label: "🎯 Daily Goals History" },
        // { to: "/mood-history", label: "😊 Mood History" },
        { to: "/journal-history", label: "📖 Journal Entries" },
      ].map(({ to, label }) => (
        <Link
          key={to}
          to={to}
          className="flex items-center justify-between p-4 rounded-lg hover:shadow-md transition-shadow"
        >
          <span className=" font-medium">{label}</span>
          <span className=" text-lg">➡️</span>
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
    <textarea
  value={feedbackText}
  onChange={(e) => setFeedbackText(e.target.value)}
  className="textarea textarea-bordered w-full mt-3"
  placeholder="Write your thoughts..."
></textarea>
    
    <div className="modal-action">
      <label htmlFor="feedback-modal" className="btn">Cancel</label>
      <label htmlFor="feedback-modal" onClick={handleFeedbackSubmit} className="btn btn-success">Submit</label>
    </div>
  </div>
</div>


      </div>
    );
};

export default Profile;