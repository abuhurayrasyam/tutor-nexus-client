import {createBrowserRouter} from "react-router";
import RootLayout from "../layouts/RootLayout";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import AuthLayout from "../layouts/AuthLayout";
import SignUp from "../features/auth/pages/SignUp";
import SignIn from "../features/auth/pages/SignIn";
import TutorLayout from "../layouts/TutorLayout";
import AddTutorials from "../features/tutor/pages/AddTutorials";
import UpdateTutorial from "../features/tutor/pages/UpdateTutorial";
import MyTutorials from "../features/tutor/pages/MyTutorials";
import StudentLayout from "../layouts/StudentLayout";
import FindTutors from "../features/student/pages/FindTutors";
import TutorDetails from "../features/student/pages/TutorDetails";
import MyBookedTutors from "../features/student/pages/MyBookedTutors";
import Loading from "../components/Loading";

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
    path: "/tutor",
    Component: TutorLayout,
    children: [
        {
            path: "add-tutorials",
            Component: AddTutorials
        },
        {
            path: "update-tutorial/:id",
            loader: ({params}) => fetch(`https://tutor-nexus.vercel.app/tutorials/${params.id}`),
            hydrateFallbackElement: <Loading></Loading>,
            Component: UpdateTutorial
        },
        {
            path: "my-tutorials",
            Component: MyTutorials
        }
    ]
  },
  {
    path: "/student",
    Component: StudentLayout,
    children: [
        {
            path: "find-tutors",
            loader: () => fetch('https://tutor-nexus.vercel.app/tutorials/'),
            hydrateFallbackElement: <Loading></Loading>,
            Component: FindTutors
        },
        {
            path: "tutor/:details",
            Component: TutorDetails,
        },
        {
            path: "my-booked-tutors",
            Component: MyBookedTutors
        }
    ]
  }
]);