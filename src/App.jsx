import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./AppLayout";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/blog",
        element: <Blog/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/about",
        element: <About/>,
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
