import React, { FC, createContext, useContext, useState } from "react";

interface UserContextType {
  adminState: string;
  setAdminState: React.Dispatch<React.SetStateAction<string>>;
}

interface UserProviderProps {
    children: React.ReactNode;
}

export const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider: FC<UserProviderProps> = ({ children }) => {
  const [adminState, setAdminState] = useState("Administrador");
  const contextValue: UserContextType = {
    adminState,
    setAdminState,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};
