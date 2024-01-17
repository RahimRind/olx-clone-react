import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import CardDetail from "./views/CardDetails";


    const router = createBrowserRouter([
        {
            path: "/",
            element: < Dashboard />
        },
        {
            path: "/Detail/:addId",
            element: <CardDetail />
        }
      ]);


function Router(){
    return<RouterProvider router = {router} />
}

export default Router




