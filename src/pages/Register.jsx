import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebaseconfig/firebase.config";

const Register = () => {
    const { createuser, googlesignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm();
  
    const onSubmit = (data) => {
      createuser(data?.email, data?.password)
        .then(() => {
          reset(); // form reset
          navigate("/");
        })
        .catch((error) => {
          console.error("Signup error:", error.message);
        });
    };

    const handleGoogleSignIn = () =>{
        return googlesignIn(auth)
        .then((result) => {
            console.log(result)
            reset(); // form reset
            navigate("/");
          })
          .catch((error) => {
            console.error("Signup error:", error.message);
          });
    }
  
    return (
      <div className="w-full max-w-sm mx-auto my-12 px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 text-primary">🕌 LifeNest Sign Up</h2>
  
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="input input-bordered w-full"
            {...register("name")}
            required
          />
  
          <input
            type="text"
            placeholder="Profile Image URL (optional)"
            className="input input-bordered w-full"
            {...register("photo")}
          />
  
          <input
            type="email"
            placeholder="Email Address"
            className="input input-bordered w-full"
            {...register("email")}
            required
          />
  
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
            {...register("password")}
            required
          />
  
          <button type="submit" className="btn btn-primary w-full">
            Create Account
          </button>
        </form>

        <button
  onClick={handleGoogleSignIn}
  className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-md py-2 px-4 hover:bg-gray-100 transition"
>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" className="w-5 h-5" />
  <span className="text-sm font-medium text-gray-700">Continue with Google</span>
</button>

        {/* Inside Register.jsx */}
<p className="text-sm mt-4 text-center">
  Already have an account?{" "}
  <Link to="/login" className="text-blue-600 hover:underline font-medium">
    Login here
  </Link>
</p>
      </div>
    );
};

export default Register;