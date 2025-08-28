import React, { useContext } from 'react';
import { use } from 'react';
import { AlertContext, CartContext, UserContext } from './Contexts';

const WithProvider=(providerName) => (IncomingComponent) =>(props) => {
        const contextData = useContext(providerName);
        return <IncomingComponent {...props} {...contextData}/>;
    }
export default WithProvider;
export const WithAlert=WithProvider(AlertContext);
export const WithUser=WithProvider(UserContext);
export const WithCart=WithProvider(CartContext);