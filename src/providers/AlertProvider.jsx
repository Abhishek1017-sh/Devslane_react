import React, { useState } from 'react';
import { AlertContext } from '../Contexts';

function AlertProvider({children}) {
    const [alert, setAlert] = useState();

    return <AlertContext.Provider value={{ alert, setAlert }}>
            {children}
        </AlertContext.Provider>
}
export default AlertProvider;