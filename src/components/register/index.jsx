import { Button, Input, RadioButton, RadioContainer, SignContainer, SignForm, SignText } from "../shared/style";
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from "react";
import { register } from "../../services/AuthService";
import Swal from 'sweetalert2'

const Register = () => {
    const navigate = useNavigate();
    const [activeButton, setActiveButton] = useState(null);
    const addForm = useRef()

    const SubmitHandler = (event) => {
        event.preventDefault()
        Swal.showLoading()

        const data = {
            name: addForm.current.name.value,
            email: addForm.current.email.value,
            password: addForm.current.password.value,
            role: activeButton
        }

        register(data)
            .then(res => {
                navigate('/sign-in'); Swal.close()
            })
            .catch(err => Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            }))
    }

    return (
        <SignContainer>
            <SignForm ref={addForm} onSubmit={SubmitHandler}>
                <Input type="text" name="name" placeholder="Full name" />
                <Input type="email" name="email" placeholder="Email" />
                <Input type="password" name="password" placeholder="Password" />
                <Input type="password" name="confirm-password" placeholder="Confirm Password" />
                <RadioContainer>
                    <RadioButton
                        onClick={(e) => { e.preventDefault(); setActiveButton('CUSTOMER') }}
                        disabled={activeButton === 'OWNER'}
                        active={`${activeButton === 'CUSTOMER'}`}
                    >
                        Customer
                    </RadioButton>
                    <RadioButton
                        onClick={(e) => { e.preventDefault(); setActiveButton('OWNER') }}
                        disabled={activeButton === 'CUSTOMER'}
                        active={`${activeButton === 'OWNER'}`}
                    >
                        Owener
                    </RadioButton>
                </RadioContainer>
                <Button type="submit">Sign up</Button>
                <div>
                    <label style={{ marginRight: '0.6rem' }}>Have an account?</label>
                    <SignText onClick={() => { navigate("/sign-in") }}>Sign in</SignText>
                </div>

            </SignForm>
        </SignContainer>
    )
}

export default Register;