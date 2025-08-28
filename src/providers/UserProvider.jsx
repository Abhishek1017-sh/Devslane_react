import React, { useEffect, useState } from 'react';
import { UserContext } from '../Contexts';
import axios from 'axios';

function UserProvider({children}) {
    const [user, setUser] = useState();

    const [page,setPage]=useState(1);

    const [loadingUser, setLoadingUser] = useState(true);
    const token = localStorage.getItem("token");


    useEffect(() => {
    if (token) {
      axios.get("https://myeasykart.codeyogi.io/me", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        console.log("User fetched:", response.data);
        setUser(response.data);
      })
      .catch((err) => {
        console.error("Unauthorized:", err);
        localStorage.removeItem("token");
        setUser(null);
        setLoadingUser(false);
      })
      .finally(() => setLoadingUser(false));
    } else {
      setLoadingUser(false);
    }
    }, []);
    if (loadingUser) {
        return <div>Loading...</div>
    }

    return <UserContext.Provider value={{ user, setUser,page,setPage,isLoggedIn:!!token}}>
        {children}
    </UserContext.Provider>
}
export default UserProvider;