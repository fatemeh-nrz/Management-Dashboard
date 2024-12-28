import { useEffect } from "react";
import NavBar from "./layout/navbar/Index";
import SideBar from "./layout/sideBar/Index";
import { togglebtn } from "./assets/togglebtn";
import MainContent from "./containers/MainContent";
  function App() {

  useEffect(() => {
    // require('./assets/togglebtn.js')
    // togglebtn();
  }, []);

  return (
    <div>
      <adminContextContainer>
      <NavBar />
      <SideBar />
      {/* <section className="content"></section> */}
      <MainContent/>
      </adminContextContainer>
    </div>
  );
}


export default App;
