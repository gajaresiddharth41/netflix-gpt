import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },

    {
      future: {
        v7_skipActionErrorRevalidation: true,
        v7_starTransition: true,
      },
    },
  ]);
 
  //check authentication 
 

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
