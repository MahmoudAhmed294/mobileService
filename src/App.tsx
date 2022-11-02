import { Container } from "@mui/material";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from "./components/layout";
import Login from "./pages/login";
import Home from "./pages/home";
import AddNewOrder from "./pages/addNewOrder";
import "react-datepicker/dist/react-datepicker.css";
import UpdateOrderDetails from "./pages/updateOrderDetails";
import { useAppSelector } from "./utils/hooks/useStore";
import { getUserInfo } from "./store/loginSlice";
import { useCookies } from "react-cookie";

function App() {
  const [cookies, setCookie] = useCookies(['token']);

  return (
    <Router>
      <Routes>
        <Route path="/login" index element={<Login />} />
        <Route element={<Layout />}>
          <Route
            path="/"
            element={cookies.token !== null ? <Home /> : <Navigate to="/login" />}
          />
          <Route path="/addNewOrder" element={<AddNewOrder />} />
          <Route path="/updateOrderDetails" element={<UpdateOrderDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
