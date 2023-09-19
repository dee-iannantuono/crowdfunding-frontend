import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from"./pages/HomePage.jsx";
import ProjectPage from"./pages/ProjectPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import CreateProjectForm from './pages/CreateProjectPage.jsx';
import NewUserForm from './pages/CreateNewUser.jsx';

import NavBar from"./components/NavBar.jsx";
import { AuthProvider } from "./components/AuthProvider.jsx";
import NewUserForm from './pages/CreateNewUser.jsx';


const router =createBrowserRouter([
  {
    path:"/",
    element:<NavBar />,
    children: [
      { path:"/",element:<HomePage />},
      { path: "/login", element: <LoginPage /> },
      { path: "/project/:id", element: <ProjectPage /> },
      { path: "/createprojectpage", element: <CreateProjectForm/>},
      { path: "/createnewuser", element: <NewUserForm/> }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
  <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
);
