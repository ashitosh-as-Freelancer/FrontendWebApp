import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./AppLayout";
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Pizzas from "./pages/Pizzas";
import Todays from "./pages/Todays";
import New from "./pages/New";
import Offers from "./pages/Offers";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/pizzas",
        element: <Pizzas/>,
      },
      {
        path: "/contact",
        element: <Login/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/new",
        element: <New/>,
      },
      {
        path: "/offers",
        element: <Offers/>,
      },
      {
        path: "/todays",
        element: <Todays/>,
      },
    ],
  },
]);

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
