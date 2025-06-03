import { createBrowserRouter } from "react-router";
import Main from "../pages/layout/Main";
import Home from "../pages/home/Home";
import NotFound from "@/components/error/NotFound";
import PricingPage from "@/pages/pricing/PricingPage";
import AboutUs from "@/pages/about-us/AboutUs";
import ContactUs from "@/pages/contact-us/ContactUs";
import Auth from "@/pages/layout/Auth";
import Login from "@/pages/auth/Login";
import SignUp from "@/pages/auth/SignUp";
import Profile from "@/pages/user/Profile";
import AllDocuments from "@/pages/user/document/AllDocuments";
import CreateDocument from "@/pages/document/CreateDocument";
import ProtectedRoutes from "./ProtectedRoutes";
import EditDocument from "@/pages/user/document/EditDocument";

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
        path: "/pricing",
        element: <PricingPage />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "auth",
        element: <Auth />,
        children: [
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "sign-up",
            element: <SignUp />,
          },
        ],
      },
      {
        path: "user",
        element: (
          <ProtectedRoutes>
            <Profile />,
          </ProtectedRoutes>
        ),
      },
      {
        path: "/user/documents",
        element: (
          <ProtectedRoutes>
            <AllDocuments />,
          </ProtectedRoutes>
        ),
      },
      {
        path: "/document/create",
        element: (
          <ProtectedRoutes>
            <CreateDocument />,
          </ProtectedRoutes>
        ),
      },
      {
        path: "/document/edit/:documentId",
        element: (
          <ProtectedRoutes>
            <EditDocument />
          </ProtectedRoutes>
        ),
      },
    ],
  },
]);
