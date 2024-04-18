import { Suspense } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
import LandingPage from "./pages/landing-page";

const Routes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<LandingPage />} />
      </Route>
    )
  );
  return (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default Routes;
