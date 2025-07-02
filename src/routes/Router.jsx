import {createBrowserRouter} from "react-router";
import RootLayout from "../layouts/RootLayout";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import AuthLayout from "../layouts/AuthLayout";
import SignUp from "../features/auth/pages/SignUp";
import SignIn from "../features/auth/pages/SignIn";
import StudentLayout from "../layouts/StudentLayout";
import FindTutors from "../features/student/pages/FindTutors";
import TutorDetails from "../features/student/pages/TutorDetails";
import MyBookedTutors from "../features/student/pages/MyBookedTutors";
import PrivateRoute from "./PrivateRoute";
import TermsAndConditions from "../pages/TermsAndConditions";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardOverview from "../features/dashboard/pages/DashboardOverview";
import AddTutorials from "../features/dashboard/pages/AddTutorials";
import UpdateTutorial from "../features/dashboard/pages/UpdateTutorial";
import MyTutorials from "../features/dashboard/pages/MyTutorials";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <NotFound></NotFound>,
    children: [
        {
            index: true,
            path: "/",
            Component: Home
        },
        {
            path: "/about",
            Component: AboutUs
        },
        {
            path: "/contact",
            Component: ContactUs
        },
        {
            path: "/terms",
            Component: TermsAndConditions
        }
    ]
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
        {
            path: "signup",
            Component: SignUp
        },
        {
            path: "signin",
            Component: SignIn
        }
    ]
  },
  {
    path: "/student",
    Component: StudentLayout,
    children: [
        {
            path: "find-tutors",
            Component: FindTutors
        },
        {
            path: "tutor/details/:id",
            element: <PrivateRoute><TutorDetails></TutorDetails></PrivateRoute>
        },
        {
            path: "my-booked-tutors",
            element: <PrivateRoute><MyBookedTutors></MyBookedTutors></PrivateRoute>
        }
    ]
  },
  {
    path: "/dashboard",
    element: <PrivateRoute>
        <DashboardLayout></DashboardLayout>
    </PrivateRoute>,
    children: [
        {
            path: "",
            element: <PrivateRoute>
                <DashboardOverview></DashboardOverview>
            </PrivateRoute>
        },
        {
            path: "add-tutorials",
            element: <PrivateRoute><AddTutorials></AddTutorials></PrivateRoute>
        },
        {
            path: "update-tutorial/:id",
            element: <PrivateRoute><UpdateTutorial></UpdateTutorial></PrivateRoute>
        },
        {
            path: "my-tutorials",
            element: <PrivateRoute><MyTutorials></MyTutorials></PrivateRoute>
        }
    ]
  }
]);