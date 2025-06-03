import { lazy } from "react";
import { createBrowserRouter } from "react-router";

import Main from "../pages/layout/Main";

const Home = lazy(() => import("../pages/home/Home"));
const NotFound = lazy(() => import("@/components/error/NotFound"));
const PricingPage = lazy(() => import("@/pages/pricing/PricingPage"));
const AboutUs = lazy(() => import("@/pages/about-us/AboutUs"));
const ContactUs = lazy(() => import("@/pages/contact-us/ContactUs"));
const Auth = lazy(() => import("@/pages/layout/Auth"));
const Login = lazy(() => import("@/pages/auth/Login"));
const SignUp = lazy(() => import("@/pages/auth/SignUp"));
const Profile = lazy(() => import("@/pages/user/Profile"));
const AllDocuments = lazy(() => import("@/pages/user/document/AllDocuments"));
const CreateDocument = lazy(() => import("@/pages/document/CreateDocument"));
const ProtectedRoutes = lazy(() => import("./ProtectedRoutes"));
const EditDocument = lazy(() => import("@/pages/user/document/EditDocument"));

import SuspenseFallback from "./SuspenseFallback";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: (
      <SuspenseFallback>
        <NotFound />
      </SuspenseFallback>
    ),
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
