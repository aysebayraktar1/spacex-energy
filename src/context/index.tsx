import { createContext, useContext, useMemo, useState } from "react";
import { User } from "../types/User";
import { mockUser } from "../mocks/mockUser";

type ContextValue = {
  user: User | null;
  setUser: (user: User) => void;
};

const Context = createContext<ContextValue>({
  user: null,
  setUser: () => {},
});

export const useApp = () => useContext(Context);

export const ContextProvider = (props: any) => {
  const [user, setUser] = useState<User>(mockUser);

  const contextValue = useMemo<ContextValue>(
    () => ({
      user,
      setUser,
    }),
    [user, setUser]
  );

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};
