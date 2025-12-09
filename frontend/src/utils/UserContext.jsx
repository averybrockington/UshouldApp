import React, { createContext, useContext, useState } from "react";

// Create context
const UserContext = createContext(null);

// Hook so components can use the context easily
export function useUser() {
  return useContext(UserContext);
}

// Provider that wraps your app
export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (username, firstName) => {
    setUser({ username, firstName });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
