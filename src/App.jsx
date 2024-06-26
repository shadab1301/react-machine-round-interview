
import './App.css'
import React from 'react';


import { NavLink, Outlet } from 'react-router-dom';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './Component/Navbar/Navbar';
import Dashboard from "./Component/Dashboard/Dashboard.jsx";

import DynamicComponent from './pages/DynamicComponent.jsx';
function App() {
// const router = createBrowserRouter([
//   {
//     element: <Navbar />,
//     path: "/",
//   },
//   {
//     element: <Dashboard />,
//     path: "component",
//   },
// ]);
const router = createBrowserRouter([
  {
    element: (
      <>
        <header>
          <Navbar />
        </header>
        <Outlet />
      </>
    ),
    children: [
      {
        element: <h1>Home</h1>,
        path: "/",
      },
      {
        element: <Dashboard />,
        path: "component",
      },
      {
        element: <DynamicComponent />,
        path: "component/:name",
      },
      {
        element: <h1>Project</h1>,
        path: "project",
      },
    ],
  },
]);
  return (
    <>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
      {/* <Modal/> */}
      {/* <ModalPage /> */}
      {/* <StarRating/> */}
      {/* <Stopwatch/> */}
      {/* <PasswordGenerator/> */}
      {/* <SearchBar/> */}
      {/* <SearchWithPagination/> */}

      {/* <CountdownTimer/> */}

      {/* <EmployeeToggle/> */}
      {/* <SlideShow/> */}

      {/* <TodoList/> */}
    </>
  );
}

export default App
