import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../provider/AuthProvider";

const SalahTraker = () => {
    const [salahData, setSalahData] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    const { register, handleSubmit } = useForm();
    const {user} = useContext(AuthContext)
    console.log(salahData)
    const today = new Date().toISOString().split("T")[0];
    
    const onSubmit = data => {
      setSalahData(data);
      setIsSubmitted(true); // সব কিছু disable করে দেবে
    };

    useEffect(() => {
      if (isSubmitted && user?.email) {
        fetch("http://localhost:3000/salah-data", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: user.email,
            date: today,
            salahData
          })
        })
        .then(res => res.json())
        .then(result => {
          console.log("Saved to DB:", result);
        })
        .catch(err => console.error("Error saving salah data:", err));
      }
    }, [isSubmitted, user, today, salahData]);
    
  
    return (
      <div className="p-4 text-center">
        <form onSubmit={handleSubmit(onSubmit)}>
  {["fajar", "dhuhr", "asr", "maghrib", "isha"].map((salah, i) => (
    <label key={i} className="flex border p-2 bg-white items-center gap-2 mb-2">
      <input
        type="checkbox"
        {...register(salah)}
        disabled={isSubmitted}
        className="checkbox checkbox-primary"
      />
      <span className="capitalize">{salah}</span>
    </label>
  ))}

  <button
    type="submit"
    className="btn btn-success mt-3"
    disabled={isSubmitted}
  >
    Save
  </button>
</form>
      </div>
    );
};

export default SalahTraker;