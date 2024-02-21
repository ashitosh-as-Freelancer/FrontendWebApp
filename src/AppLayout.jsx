import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import GlobalStyles from "./ui/globalStyles";

function AppLayout() {
  return (
    <>
      <GlobalStyles/>
      <Header />
      <Outlet/>
    </>
  );
}

export default AppLayout;
