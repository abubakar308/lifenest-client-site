import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
   const {signIn} = useContext(AuthContext)
       const navigate = useNavigate()
       const {register, handleSubmit} = useForm()
       const onSubmit = data => {
        signIn(data?.email, data?.password)
           if(data?.email){
               navigate("/")
           }
       };
       return (
       <div className="w-full my-10 max-w-sm mx-auto text-center">
           <h2 className="text-2xl py-4">LifeNest</h2>
         <form onSubmit={handleSubmit(onSubmit)}>
             <input type="email" placeholder="Email Address" className="input input-bordered w-full my-4" {...register("email")} required />
   
             <input type="password" placeholder="Password" className="input input-bordered w-full my-4" {...register("password")} required />
        
             <button type="submit" className="btn w-full btn-primary">Login</button>
         </form>
   
      
       </div>
    );
};

export default Login;