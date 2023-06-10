import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from 'next/router';

import useSWR from 'swr'

const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((json) => json.data)

const UserContext = createContext();

export function UserProvider({ children }) {

    const [user, setUser] = useState(null);

    const id = useRouter().query.key;
    const {
        data: account,
        error,
        isLoading,
    } = useSWR(id ? `/api/${id}` : null, fetcher)

    useEffect(() => {
        if(!error && account) {
            setUser(account);
        }
    }, [isLoading])

    return (
        <UserContext.Provider value={{user}}>
            {children}
        </UserContext.Provider>
    );
}

export function GetUserContext() {
    return useContext(UserContext);
}