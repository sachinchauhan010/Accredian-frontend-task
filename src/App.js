import { createBrowserRouter } from "react-router-dom";
import Hero from "./pages/Hero";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Refer from "./pages/Refer";
import FAQ from "./pages/FAQ";
import Benfits from "./pages/Benfits";
import Support from "./pages/Support";
import { RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Hero />
    },
    {
      path: '/refer',
      element: <Refer />
    },
    {
      path: '/FAQ',
      element: <FAQ />
    },
    {
      path: '/benfits',
      element: <Benfits />
    },
    {
      path: '/support',
      element: <Support />
    },
  ]
  )
  return (
    <div>
      <ToastContainer />
      <RouterProvider router={router}>
        <Hero />
      </RouterProvider>
    </div>
  );
}

export default App;
