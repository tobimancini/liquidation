import React, { FC, createContext, useContext, useState } from "react";

interface UserContextType {
  adminState: string;
  setAdminState: React.Dispatch<React.SetStateAction<string>>;
  periodState: string;
  setPeriodState: React.Dispatch<React.SetStateAction<string>>;
  liquidationState: string;
  setLiquidationState: React.Dispatch<React.SetStateAction<string>>;
  adminUsersState: string;
  setAdminUsersState: React.Dispatch<React.SetStateAction<string>>;
  adminComState: {
    compañía: string,
    equipo: string,
    vendedor: string,
  };
  setAdminComState: React.Dispatch<React.SetStateAction<{
    compañía: string,
    equipo: string,
    vendedor: string,
  }>>;
}

interface UserProviderProps {
    children: React.ReactNode;
}

export const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider: FC<UserProviderProps> = ({ children }) => {
  const [adminUsersState, setAdminUsersState] = useState("Asesor");
  const [periodState, setPeriodState] = useState("arpartners");
  const [liquidationState, setLiquidationState] = useState("arpartners");
  const [adminState, setAdminState] = useState('Usuarios');
  const [adminComState, setAdminComState] = useState({
    compañía: "arpartners",
    equipo: "",
    vendedor: "manager",
  })

  const contextValue: UserContextType = {
    adminState,
    setAdminState,
    periodState,
    setPeriodState,
    liquidationState,
    setLiquidationState,
    adminUsersState,
    setAdminUsersState,
    adminComState,
    setAdminComState
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};
