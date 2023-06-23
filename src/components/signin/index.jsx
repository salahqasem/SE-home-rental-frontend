import { Button, Input, SignContainer, SignForm, SignText } from "../shared/style";
import { useNavigate } from 'react-router-dom';
import { ForgetPasswordText, RegisterContainer } from "./style";
import { useContext, useRef } from "react";
import { login } from '../../services/AuthService';
import Cookies from 'js-cookie';
import { SetJWT } from "../../store/context";
import jwt_decode from 'jwt-decode';
import Swal from 'sweetalert2'

const SignInPage = () => {
    const navigate = useNavigate();
    const loginForm = useRef()
    const { setJwt, setUserRole } = useContext(SetJWT);

    const SubmitHandler = (event) => {
        event.preventDefault()
        const data = {
            email: loginForm.current.email.value,
            password: loginForm.current.password.value
        }
        Swal.showLoading()
        login(data).then(res => {
            Swal.close()
            Cookies.set('accessToken', res.data.accessToken);
            Cookies.set('refreshToken', res.data.refreshToken);
            setJwt(jwt_decode(res.data.accessToken));
            navigate('/');
        })
            .catch(err => Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            }))
    }

    return (
        <SignContainer>
            <SignForm ref={loginForm} onSubmit={SubmitHandler}>
                <Input type="email" name="email" placeholder="Email" required />
                <Input type="password" name="password" placeholder="Password" required />
                <RegisterContainer>
                    <Button type="submit">Sign In</Button>
                    <div>
                        <label style={{ marginRight: '0.6rem' }}>Not a member?</label>
                        <SignText onClick={() => { navigate("/register") }}>Register</ SignText>
                    </div>
                </RegisterContainer>
                <ForgetPasswordText onClick={() => { navigate("/forget-password") }}>Forget Password ?</ ForgetPasswordText>
            </SignForm>
        </SignContainer>
    );
};

export default SignInPage