import React, { useState } from "react";

type User = {
    name: string
    email: string
}

const UserHookExample: React.FC = () => {
    const [user, setUser] = useState<User | null>(null)

    function handleButtonClick() {
        setUser({ name: 'joe', email: 'joe@gmail.com' })
    }

    return (<div>
        user: {user?.name ?? 'null'} email: {user?.email ?? 'null'}
        <br />
        <button onClick={() => handleButtonClick()}>Set State</button>
    </div>)
}

export default UserHookExample;