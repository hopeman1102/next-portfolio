import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from 'next/router';

const UserContext = createContext();

export function UserProvider({ children }) {
    const router = useRouter();
    const id = router.query.key;
    const [user, setUser] = useState(null);
    useEffect(() => {
        if(id !== undefined) {
            fetch(`http://95.216.103.64/portfolio?${new URLSearchParams({
                id
            }).toString()}`)
            .then(res => res.json())
            .then(data => {
                if(data.msg === 'success') {
                    setUser(data.account);
                } else {
                    setUser({
                        category: -1
                    })
                }
            });
        }
    }, [id])

    return (
        <UserContext.Provider value={{user}}>
            {children}
        </UserContext.Provider>
    );
}

export function GetUserContext() {
    return useContext(UserContext);
}