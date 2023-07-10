import React, { useState, createContext } from 'react';

export const UserDetailsContext = createContext();

export const UserDetailsProvider = props => {
    const [userDetails, setUserDetails] = useState({
        name: '',
        age: '',
        weight: '',
        height: ''
      });

    return (
        <UserDetailsContext.Provider value={[userDetails, setUserDetails]}>
            {props.children}
        </UserDetailsContext.Provider>
    );
};
