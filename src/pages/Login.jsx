import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm();
  
    const onSubmit = (data) => {
      signIn(data?.email, data?.password)
        .then(() => {
          reset();
          navigate("/");
        })
        .catch((error) => {
          console.error("Login error:", error.message);
        });
    };
  
    return (
      <div className="w-full max-w-sm mx-auto my-12 px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 text-primary">🔐 LifeNest Login</h2>
  
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
            Login
          </button>
        </form>

        {/* Inside Login.jsx */}
<p className="text-sm mt-4 text-center">
  Don't have an account?{" "}
  <Link to="/register" className="text-blue-600 hover:underline font-medium">
    Register here
  </Link>
</p>
      </div>
    );
};

export default Login;