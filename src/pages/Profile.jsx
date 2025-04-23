import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";


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
        <div className="text-2xl">
           
           <p>profile</p>
        </div>
    );
};

export default Profile;