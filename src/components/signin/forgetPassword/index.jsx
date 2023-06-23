import { useRef, useState } from "react";
import { Button, Input, SignContainer, SignForm } from "../../shared/style"
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { resetPassword, sendOtp } from "../../../services/AuthService";

const ForgetPassword = () => {
    const navigate = useNavigate();
    const ForgetPasswordRef = useRef();
    const [otpSuccess, setOtpSuccess] = useState(false);

    const SubmitHandler = (e) => {
        e.preventDefault();
        const ref = ForgetPasswordRef.current
        if (ref.email) {
            Swal.showLoading()
            sendOtp({ email: ref.email.value }).then((res) => {
                setOtpSuccess(true);
                Swal.close();
            }).catch((err) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Wrong Email!',
                })
            })
        }
        if (otpSuccess) {
            if (ref.pass1.value === ref.pass2.value) {
                Swal.showLoading()
                resetPassword({ email: ref.email2.value, otp: ref.otp.value, password: ref.pass1.value }).then((res) => {
                    setOtpSuccess(true);
                    Swal.close();
                    navigate('/sign-in')
                }).catch((err) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Something went wrong!',
                    })
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Unmatch Password!',
                })
            }

        }
    }

    return (
        <SignContainer>
            <SignForm ref={ForgetPasswordRef} onSubmit={SubmitHandler}>
                {otpSuccess ? <>

                    <Input type="email" name="email2" placeholder="Enter Your Email" required />
                    <Input type="number" name="otp" placeholder="Enter OTP" required />
                    <Input type="password" name="pass1" placeholder="Enter Your Password" required />
                    <Input type="password" name="pass2" placeholder="Confirm Password" required /></>
                    : <Input type="email" name="email" placeholder="Enter Your Email" required />
                }
                <Button type="submit">{otpSuccess ? 'Change Password' : 'Send OTP'}</Button>
            </SignForm>
        </SignContainer>
    );
}

export default ForgetPassword