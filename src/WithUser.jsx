import React, { useContext } from 'react';
import { use } from 'react';
import { UserContext } from './App';

function WithUser(IncomingComponent) {
    function OutputComponent(props) {
        const { user, setUser } = useContext(UserContext);
    return <IncomingComponent {...props} user={user} setUser={setUser} />;
    }
    return OutputComponent;
}
export default WithUser;