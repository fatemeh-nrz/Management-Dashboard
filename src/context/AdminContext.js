import { createContext, useContext } from "react";

export const AdminContext = createContext({
  sideBar: false,
  setSideBar: () => !sideBar,
});

const AdminContextContainer = ({ children }) => {
  const {sideBar, setSideBar} = useContext(AdminContext);

  return (
    <AdminContext.Provider>
        {children}
    </AdminContext.Provider>

  )
};

export default AdminContextContainer;
