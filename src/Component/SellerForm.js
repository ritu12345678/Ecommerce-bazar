import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";



const schema = yup.object().shape({
    fname: yup.string().required("its a required field"),
    lname: yup.string().required(),
    email: yup.string().required().matches(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/, "Email should be proper"),
    pnumber: yup.string().required().matches(/^[0-9]{10}$/, "mobile number should in length 10 and consist number only "),
    aadhar: yup.string().required().matches(/^[2-9]{1}[0-9]{3}\s{1}[0-9]{4}\s{1}[0-9]{4}$/, "Should not contain any alphabet or special character ,having space after every 4 digit"),
    pan: yup.string().required().matches(/[A-Z]{5}[0-9]{4}[A-Z]{1}/, "should follow the standard")
});
const SellerForm = () => {
    const [selectedImage, setSelectedImage] = useState();
    const [inputfieldSet, SetInputfieldSet] = useState()
    const [videoFile, setVideoFile] = useState();
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: "onChange",
        resolver: yupResolver(schema),
    });
    const submit = (data, e) => {
        reset()
    }

    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
        }

    };
    const videoChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setVideoFile(e.target.files[0]);
        }

    };

    const removeSelectedImage = (e) => {
        setSelectedImage();
        SetInputfieldSet(Date.now())


    };

    return (<>
        <div className="without-login with-login">
            <div className="container">
                <form onSubmit={handleSubmit(submit)} >
                    <div className="login-details">
                        <div className="login-description">
                            <div className="form-intput">
                                <label>
                                    First name<sup className="highlighted">*</sup>
                                </label>
                                <input {...register("fname")}
                                    type="text"
                                    placeholder="Enter your name"
                                    id="fname"
                                    maxLength="30"

                                />
                                <p>{errors.fname?.message}</p>
                            </div>
                            <div className="form-intput">
                                <label>last name</label>
                                <input {...register("lname")}
                                    type="text"
                                    placeholder="Enter your last name"
                                    id="lname"
                                    maxLength="30"

                                />
                                <p>{errors.lname?.message}</p>
                            </div>
                            <div className="form-intput">
                                <label>
                                    Email<sup className="highlighted">*</sup>
                                </label>
                                <input {...register("email")}
                                    type="email"
                                    placeholder="Enter your email"
                                    id="email"
                                    maxLength="100"

                                />
                                <p>{errors.email?.message}</p>
                            </div>
                            <div className="form-intput">
                                <label>DOB</label>
                                <div className="react-datepicker-wrapper">
                                    <div className="react-datepicker__input-container">
                                        <input
                                            type="text"
                                            id="dob"
                                            placeholder="Enter your date of birth"
                                            className=""

                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-intput">
                                <label>
                                    gender<sup className="highlighted">*</sup>
                                </label>
                                <select id="gender">
                                    <option value="">Please select gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="others">Others</option>
                                </select>
                            </div>
                            <div className="form-intput">
                                <label>
                                    phone number
                                    <span className="adhar">(should register with aadhar)</span>
                                    <sup className="highlighted">*</sup>
                                </label>
                                <div className="phone-number-field">
                                    <input {...register("pnumber")}
                                        type="text"
                                        placeholder="Enter your number"
                                        id="pnumber"
                                        maxLength="10"

                                    />
                                    <p>{errors.pnumber?.message}</p>

                                </div>
                            </div>
                            <div className="form-intput"></div>
                        </div>
                    </div>
                    <div className="login-details">
                        <h3>Address</h3>
                        <div className="login-description">
                            <div className="form-intput">
                                <label>
                                    flat number<sup className="highlighted">*</sup>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your flat number"
                                    id="fnumber"
                                    maxLength="100"

                                />
                            </div>
                            <div className="form-intput">
                                <label>
                                    street number<sup className="highlighted">*</sup>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your street number"
                                    id="street"
                                    maxLength="100"

                                />
                            </div>
                            <div className="form-intput">
                                <label>landmark</label>
                                <input
                                    type="text"
                                    placeholder="Enter your landmark"
                                    id="landmark"
                                    maxLength="100"

                                />
                            </div>
                            <div className="form-intput">
                                <label>
                                    zip code<sup className="highlighted">*</sup>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your zip code"
                                    id="zip"
                                    maxLength="6"

                                />
                            </div>
                            <div className="form-intput">
                                <label>country</label>
                                <select>
                                    <option value="a" disabled="">
                                        Please select country
                                    </option>
                                    <option value="5ae8284db37516a75ac0aada">INDIA</option>
                                </select>
                            </div>
                            <div className="form-intput">
                                <label>
                                    state<sup className="highlighted">*</sup>
                                </label>
                                <select id="state">
                                    <option value="">Please select state</option>
                                    <option value="5ae83bedb37516a75ac0ab25">
                                        Uttar Pradesh
                                    </option>

                                    <option value="5be3e11596adbac658328a8d">
                                        Lakshadweep
                                    </option>
                                    <option value="5be3e16b96adbac658328a8f">Puducherry</option>
                                </select>
                            </div>
                            <div className="form-intput">
                                <label>
                                    city<sup className="highlighted">*</sup>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your city"
                                    id="city"
                                    maxLength="100"

                                />
                            </div>
                            <div className="form-intput">
                                <label>Address Type</label>
                                <select id="address">
                                    <option value="" disabled="">
                                        Please select address type
                                    </option>
                                    <option value="home">Home</option>
                                    <option value="work">Office</option>
                                    <option value="others">Warehouse</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="login-details">
                        <h3>Business details</h3>
                        <div className="login-description">
                            <div className="form-intput">
                                <label>
                                    shop name<sup className="highlighted">*</sup>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your shop name"
                                    id="shopname"
                                    maxLength="100"

                                />
                            </div>
                            <div className="form-intput">
                                <label>
                                    Aadhaar number<sup className="highlighted">*</sup>
                                </label>
                                <div className="phone-number-field adhar-field">
                                    <input {...register("aadhar")}
                                        type="text"
                                        placeholder="Enter your aadhar number"
                                        name="aadharNumber"
                                        id="aadhar"
                                        maxLength="12"

                                    />
                                    <p>{errors.aadhar?.message}</p>
                                </div>
                            </div>
                            <div className="form-intput">
                                <label>
                                    GST number<sup className="highlighted">*</sup>
                                </label>
                                <input
                                    type="text"
                                    name="gstNumber"
                                    placeholder="Enter your gst number"
                                    id="gst"
                                    maxLength="15"

                                />
                            </div>
                            <div className="form-intput">
                                <label>
                                    PAN number<sup className="highlighted">*</sup>
                                </label>
                                <input {...register("pan")}
                                    type="text"
                                    name="panNumber"
                                    placeholder="Enter your pan number"
                                    id="pan"
                                    maxLength="10"

                                />
                                <p>{errors.pan?.message}</p>
                            </div>
                            <div className="form-intput shop-gst-wrap">
                                <div className="form-intput">
                                    <label>shop image</label>
                                    <div className="file-inputs">
                                        <input
                                            key={inputfieldSet}
                                            type="file"
                                            name="myImage"
                                            className="file-in"
                                            id="myFile"
                                            onChange={imageChange}

                                        />
                                        <i className="fas fa-solid fa-upload"></i> &nbsp;&nbsp;
                                        <div className="gst-file-name"></div>

                                    </div>
                                    {selectedImage && (
                                        <div >
                                            <img
                                                src={URL.createObjectURL(selectedImage)}

                                                alt="Thumb"
                                            />
                                            <p>{URL.createObjectURL(selectedImage)}</p>
                                            <button onClick={removeSelectedImage} >
                                                Remove This Image
                                            </button>
                                        </div>)}
                                </div>
                                <div className="file-inputs">
                                    <input
                                        key={inputfieldSet}
                                        type="file"
                                        name="myImage"
                                        className="file-in"
                                        id="myFile"
                                        onChange={videoChange}

                                    />
                                    <i className="fas fa-solid fa-upload"></i> &nbsp;&nbsp;
                                    <div className="gst-file-name"></div>

                                </div>
                                {videoFile && (
                                    <video width="500" controls>
                                        <source src={URL.createObjectURL(videoFile)} />
                                    </video>)}
                                <div className="form-intput">
                                    <label>
                                        gst pdf<sup className="highlighted">*</sup>
                                    </label>
                                    <div className="file-inputs">
                                        <input
                                            type="file"
                                            variant="outlined"
                                            className="file-in"
                                            name="upload"
                                            accept="application/pdf,.jpg ,.jpeg,.doc , .docx ,.png"
                                            id="gstpdf"
                                        />
                                        <i className="fas fa-file-pdf"></i> &nbsp; &nbsp;
                                        <div className="gst-file-name"></div>
                                    </div>
                                </div>
                                <div className="seller-img-input">
                                    <div className="seller-img-wrap"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="login-details">
                        <h3>Bank details</h3>
                        <div className="login-description">
                            <div className="form-intput">
                                <label>
                                    Bank name<sup className="highlighted">*</sup>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your bank name"
                                    id="bankname"
                                    maxLength="100"

                                />
                            </div>
                            <div className="form-intput">
                                <label>
                                    account number<sup className="highlighted">*</sup>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Enter your account number"
                                    id="accountnumber"
                                    maxLength="18"
                                    minLength="9"

                                />
                            </div>
                            <div className="form-intput">
                                <label>
                                    confirm account number<sup className="highlighted">*</sup>
                                </label>
                                <input
                                    type="password"
                                    placeholder="confirm account number"
                                    id="confirmac"
                                    value=""
                                />
                            </div>
                            <div className="form-intput">
                                <label>
                                    IFSC<sup className="highlighted">*</sup>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your IFSC"
                                    id="ifsc"
                                    maxLength="11"

                                />
                            </div>
                            <div className="form-intput">
                                <label>
                                    account holder name<sup className="highlighted">*</sup>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter account holder name"
                                    id="acholder"
                                    maxLength="100"

                                />
                            </div>
                            <div className="form-intput">
                                <label>cheque Image</label>
                                <div className="file-inputs">
                                    <input
                                        type="file"
                                        name="myImage"
                                        className="file-in"
                                        id="cheque"
                                    />
                                    <i className="fas fa-solid fa-upload"></i> &nbsp;&nbsp;
                                    <div className="gst-file-name"></div>
                                </div>
                                <div className="seller-img-wrap"></div>
                            </div>
                        </div>
                    </div>
                    <div className="login-details">
                        <div className="login-description">
                            <div className="form-intput">
                                <label>
                                    password<sup className="highlighted">*</sup>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    id="password"

                                />
                            </div>
                            <div className="form-intput">
                                <label>
                                    confirm password<sup className="highlighted">*</sup>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Confirm password"
                                    id="confirmpass"
                                />
                            </div>
                        </div>
                    </div>
                    {/* <div className="cond">
             <input type="checkbox" id="term"/> I agree to Bazaar <a target="_blank" href="/page/terms">Terms of Service</a>&nbsp;and <a target="_blank" href="/policy">Privacy</a>.<br><br>
                                        </div> */}
                    <div className="registration-btn">
                        <input className="btn shop-now" type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>

    </>)
}

export default SellerForm