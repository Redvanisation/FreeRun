import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import useLocalStorage from '../hooks/useLocalStorage';

export const UserContext = createContext(null);

const UsersProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage('User', {});

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

UsersProvider.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default UsersProvider;
