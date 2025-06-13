import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout";
import { Test } from "./pages/Test";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<h1>Path not found</h1>}>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<Test />} />
    </Route>
  )
);
