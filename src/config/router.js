import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import CardDetail from "./views/CardDetails";
import Signup from "../components/Signup/Signup";
import Header from '../components/Header';
import Footer from '../components/footer'
import Login from "../components/Login/Login";

function AppRouter() {
    return (<>
      <div className="App">
        <Router>
            <Header/>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Detail/:addId" element={<CardDetail />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer/>
        </Router>
      </div>
      </>
    );
  }
  
  export default AppRouter;



  //     const router = createBrowserRouter([
//         {
//             path: "/",
//             element: < Dashboard />
//         },
//         {
//             path: "/Detail/:addId",
//             element: <CardDetail />
//         },
//         {
//             path: "Singup",
//             element: <Singup/>
//         }
//       ]);


// function Router(){
//     return<RouterProvider router = {router} />
// }

// export default Router




