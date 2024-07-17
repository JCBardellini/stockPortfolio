import "./styles/main.scss";
import SideNav from "./components/SideNav/SideNav";
import Search from "./components/Search/Search";
import Notifications from "./components/Notifications/Notifications";
import Main from "./pages/Main/Main";
import { useContext } from "react";
import { primaryContext } from "./context/primaryContext";

function App() {
  const { marketNews, cryptoNews } = useContext(primaryContext);

  //catching the undefine to return nothing until data is collected
  if (!marketNews || !cryptoNews) return <></>;
  return (
    <>
      <div id="layout">
        {/* For user to search for stocks, etc.. */}
        <Search />
        {/* Users navBar */}
        <SideNav />
        {/* Will hold main content */}
        <Main />
        {/* Trending stocks, news, etc. */}
        <Notifications />
      </div>
    </>
  );
}

export default App;
