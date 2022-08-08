import React from 'react'
import Modal from '../Component/Modal'
import { loginAction } from '../Store/Action/LoginAction'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'



const Login = ({ onClose }) => {
    console.log(onClose)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const submit = (e) => {
        // navigate('/')
        e.preventDefault()
        const credential = {
            "email": e.target.email.value,
            "password": e.target.password.value
        }
        loginAction(dispatch, credential, navigate)

    }


    return (<>
        <Modal>
            <form onSubmit={submit}>
                <div>
                    <h4>Login</h4>

                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" name="email" /><br></br>


                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" /><br></br>


                    <button type="submit">login</button>

                    <button onClick={() => { onClose(false) }}>close</button>
                </div>


            </form>
        </Modal>



    </>)
}

export default Login