import React from 'react'

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/pages/Home';
import RootLayOut from './Components/RootLayOut';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayOut/>}>
      <Route path='/' element={<Home/>}></Route>
    </Route>
  )
);

const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
