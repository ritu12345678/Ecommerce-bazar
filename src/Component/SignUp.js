
import Modal from '../Component/Modal'
import signUpAction from '../Store/Action/SignUpAction'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';


import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Navigate, useNavigate } from 'react-router-dom';

const schema = yup.object().shape({
    email: yup.string().email().required().matches(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,"enter a valid email address"),
    password: yup.string().required("please enter your password"),
    mobile: yup.string().required().matches(/^[0-9]{10}$/, "mobile number should in length 10")
});

const SignUp = ({ onClose }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });
    const submit = (formdata, e) => {

        const data = {
            "browser": detectBrowser(),
            "email": e.target.email.value,
            "first_name": e.target.fname.value,
            "ip": "45.65.41.66",
            "last_name": e.target.lname.value,
            "login": false,
            "mobile": e.target.mobile.value,
            "password": e.target.password.value,
            "gender": e.target.gender.value,       // Male/Female/Others
            "dob": e.target.dob.value     //DD-MM-YYYY 
        }
        console.log(e.target.email.value)
        // console.log(data)
        signUpAction(dispatch, data)
        reset()
    }
    const token = useSelector(state => state.SignUpReducer.x)



    const dispatch = useDispatch()
    function detectBrowser() {
        if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
            return 'Opera';
        } else if (navigator.userAgent.indexOf("Chrome") != -1) {
            return 'Chrome';
        } else if (navigator.userAgent.indexOf("Safari") != -1) {
            return 'Safari';
        } else if (navigator.userAgent.indexOf("Firefox") != -1) {
            return 'Firefox';
        } else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) {
            return 'IE';//crap
        } else {
            return 'Unknown';
        }
    }


    {/*} const submit = (e) => {
        e.preventDefault()

        const data = {
            "browser": detectBrowser(),
            "email": e.target.email.value,
            "first_name": e.target.fname.value,
            "ip": "45.65.41.66",
            "last_name": e.target.lname.value,
            "login": false,
            "mobile": e.target.mobile.value,
            "password": e.target.password.value,
            "gender": e.target.gender.value,       // Male/Female/Others
            "dob": e.target.dob.value     //DD-MM-YYYY 
        }
        console.log(e.target.email.value)
        // console.log(data)
        signUpAction(dispatch, data)
    }*/}



    return (<>
        <Modal>
            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <h4>sign</h4>
                    <label for="fname">First name:</label>
                    <input type="text" id="fname" name="fname" /><br></br>
                    <label for="lname">Last name:</label>
                    <input type="text" id="lname" name="lname" /><br></br>
                    <label for="email">Email:</label>
                    <input type="text"  {...register("email")} id="email" name="email" /><br></br>
                    <p>{errors.email?.message}</p>
                    <label for="mobile">Mobile:</label>
                    <input type="text"  {...register("mobile")} id="mobile" name="mobile" /><br></br>
                    <p>{errors.mobile?.message}</p>
                    <label for="dob">DOB:</label>
                    <input type="date" id="dob" name="dob" /><br></br>
                    <label for="password">Password:</label>
                    <input type="password" {...register("password")} id="password" name="password" /><br></br>
                    <p>{errors.password?.message}</p>
                    <label for="gender">Choose a gender:</label>
                    <select name="gender" id="gender">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>

                    </select>
                    <button type="submit">Submit</button>

                    <button onClick={() => { onClose(false) }}>close</button>
                </div>


            </form>
        </Modal>
    </>)
}

export default SignUp


{
     /* .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least 8 characters, one uppercase, one number and one special case character"
   )*/}