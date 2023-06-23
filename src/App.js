import { useEffect, useState } from "react";
import NavBar from "./components/nav";
import PageRoutes from "./routes/routes";
import { BrowserRouter } from "react-router-dom";
import { SetJWT } from "./store/context";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

function App() {
  const [jwt, setJwt] = useState("");
  const [useID, setUserID] = useState("");
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    if (Cookies.get("accessToken")) {
      setJwt(Cookies.get("accessToken"));
      setUserRole(jwt_decode(Cookies.get("accessToken")).sub.split(",")[1]);
      setUserID(jwt_decode(Cookies.get("accessToken")).sub.split(",")[2]);
    }
  }, [Cookies.get("accessToken")]);

  return (
    <div className="App">
      <SetJWT.Provider
        value={{ jwt, setJwt, useID, setUserID, userRole, setUserRole }}
      >
        <BrowserRouter>
          <NavBar />
          <PageRoutes />
        </BrowserRouter>
      </SetJWT.Provider>
    </div>
  );
}

export default App;
