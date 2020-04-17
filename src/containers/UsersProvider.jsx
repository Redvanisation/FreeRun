import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import { useCookies } from 'react-cookie';


export const UserContext = createContext(null);

const UsersProvider = ({ children }) => {
  const [cookies, setCookie, removeCookie] = useCookies(['user']);


  return (
    <UserContext.Provider
      value={{
        cookies,
        setCookie,
        removeCookie,
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
