import { View, Text } from 'react-native'
import React, {useState} from 'react'
import { UserContext } from '../../context/user'

const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState({
    login: false,
    user: "usuario"
  });



  return (
    <UserContext.Provider value={{ 
      user
    }}>
      {children}
    </UserContext.Provider>
  );
};

const withUser = (Child: any) => (props: any) => (
  <UserContext.Consumer>
    {(context) => <Child {...props} {...context} />}
  </UserContext.Consumer>
);

export { UserProvider, withUser };
