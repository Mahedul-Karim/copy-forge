import { createBrowserRouter } from "react-router";
import Main from "../pages/layout/Main";
import Home from "../pages/home/Home";
import NotFound from "@/components/error/NotFound";
import PricingPage from "@/pages/pricing/PricingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path:'/pricing',
        element:<PricingPage />
      }
    ],
  },
]);
