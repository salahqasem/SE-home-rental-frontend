import { useContext } from "react";
import { SetJWT } from "../../store/context";
import { Nav, NavText } from "./style";
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const NavBar = () => {
    const navigate = useNavigate();
    const { jwt, setJwt, setUserID, userRole, setUserRole } = useContext(SetJWT);

    function get_cookie(name) {
        return document.cookie.split(';').some(c => {
            return c.trim().startsWith(name + '=');
        });
    }

    function delete_cookie(name, path, domain) {
        if (get_cookie(name)) {
            document.cookie = name + "=" +
                ((path) ? ";path=" + path : "") +
                ((domain) ? ";domain=" + domain : "") +
                ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
        }
    }

    const Logout = () => {
        setJwt("");
        setUserID("");
        setUserRole("");
        Cookies.remove("accessToken");
        delete_cookie("accessToken", "/", "localhost");
        Cookies.remove("refreshToken");
        navigate("sign-in");
    }

    return <Nav>
        <NavText onClick={() => { navigate("/") }}>Property Management Portal</NavText>
        <div>
            {userRole === 'OWNER' && <NavText onClick={() => { navigate("/add-properties") }}>Add Properties</NavText>}
            {userRole === 'OWNER' && <NavText onClick={() => { navigate("/my-properties") }}>My Properties</NavText>}
            {userRole === 'OWNER' && <NavText onClick={() => { navigate("/all-applications") }}>All Applications</NavText>}
            {userRole === 'ADMIN' && <NavText onClick={() => { navigate("/") }}>Rented Properties</NavText>}
            {userRole === 'ADMIN' && <NavText onClick={() => { navigate("/customers") }}>Last Customers</NavText>}
            {userRole === 'ADMIN' && <NavText onClick={() => { navigate("/manage-users") }}>Manage Users</NavText>}

            {jwt ? <NavText onClick={() => Logout()}>Log out</NavText> : <NavText onClick={() => { navigate("sign-in") }}>Sign in</NavText>}
        </div>
    </Nav>
}

export default NavBar;