import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import GlobalStyles from "./ui/globalStyles";
import {useSelector} from 'react-redux';
import MiniCart from "./components/MiniCart";


function AppLayout() {
  const basket = useSelector((store) => store.basket);
  console.log(basket);
  return (
    <>
      <GlobalStyles/>
      <Header />
      {basket.cartShow && <MiniCart/>}
      <Outlet/>
    </>
  );
}

export default AppLayout;
