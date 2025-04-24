import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../provider/AuthProvider";

const SalahTraker = () => {
  const [salahData, setSalahData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit } = useForm();
  const { user } = useContext(AuthContext);
  const today = new Date().toISOString().split("T")[0];

  // Submit handler
  const onSubmit = (data) => {
    setSalahData(data);
    setIsSubmitted(true);
  };

  // Save to DB
  useEffect(() => {
    if (isSubmitted && user?.email) {
      fetch(`${import.meta.env.VITE_API_URL}/salah-data`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: user.email,
          date: today,
          salahData,
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log("Saved to DB:", result);
        })
        .catch((err) => console.error("Error saving salah data:", err));
    }
  }, [isSubmitted, user, today, salahData]);

  // Check if already submitted
  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_API_URL}/salah-data/today?email=${user?.email}&date=${today}`
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.exists) {
          setIsSubmitted(true);
          setSalahData(result.salahData);
        }
      });
  }, [user?.email, today]);

  return (
    <div className="p-4 max-w-sm mx-auto mt-4">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">🕌 Today's Salah</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        {["fajar", "dhuhr", "asr", "maghrib", "isha"].map((salah) => (
          <label
            key={salah}
            className={`flex items-center gap-3 p-3 transition ${
              salahData[salah]
                ? "text-green-800 border-green-300"
                : "text-gray-400"
            }`}
          >
            <input
              type="checkbox"
              {...register(salah)}
              disabled={isSubmitted}
              defaultChecked={salahData[salah]}
              className="checkbox checkbox-success"
            />
            <span className="capitalize text-lg font-medium">{salah}</span>
          </label>
        ))}

        <button
          type="submit"
          disabled={isSubmitted}
          className="btn btn-success w-full mt-4"
        >
          Save
        </button>
      </form>
    </div>
    );
};

export default SalahTraker;