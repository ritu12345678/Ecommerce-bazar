import React from 'react'

const SellerOnlineForm = () => {
    return (<>
        <div className="offer-content seller-register-popup">
            <button className="modal-closeBtn" type="button" >
                <i className="fal fa-times-circle" >
                </i>
            </button>
            <div className="register-popup seller-register">
                <h4>And become a seller</h4>
                <div className="offer-title">This feature is not available for You..<br /> Please register as seller</div>
                {/*<fo rm>
                       <div className="seller-inputs">
                           <div className="seller-input gst-inp-fld"><div className="MuiFormControl-root MuiTextField-root">
                               <label className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined Mui-required Mui-required" data-shrink="false">GST No.<span aria-hidden="true" className="MuiFormLabel-asterisk MuiInputLabel-asterisk">&thinsp;*</span></label><div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl"><input aria-invalid="false" required="" type="text" maxLength="15" minLength="15" className="MuiInputBase-input MuiOutlinedInput-input" value="" />
                                   <fieldset aria-hidden="true" className="jss9 MuiOutlinedInput-notchedOutline">
                                       <legend className="jss11"><span>GST No.&nbsp;*</span></legend>
                                   </fieldset>
                               </div>
                           </div>
                           </div>
                           <div className="seller-input gst-inp-fld">
                               <div className="MuiFormControl-root MuiTextField-root">
                                   <label className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined" data-shrink="false">Aadhar No.</label>
                                   <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl">
                                       // <input aria-invalid="false" type="text" maxLength="12" className="MuiInputBase-input MuiOutlinedInput-input" value="" />
                                       <fieldset aria-hidden="true" className="jss9 MuiOutlinedInput-notchedOutline">
                                           <legend className="jss11"><span>Aadhar No.</span></legend>
                                       </fieldset>
                                   </div>
                               </div>
                               <div className="form-intput">
                               </div>
                           </div>
                           <div className="seller-input input-icon dual-input">
                               <div className="MuiFormControl-root MuiTextField-root">
                                   <label className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined Mui-required Mui-required" data-shrink="false">Shop Name<span aria-hidden="true" className="MuiFormLabel-asterisk MuiInputLabel-asterisk">&thinsp;*</span>
                                   </label>
                                   <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl">
                                       // <input aria-invalid="false" required="" type="text" maxLength="50" minLength="2" className="MuiInputBase-input MuiOutlinedInput-input" value="" />
                                       <fieldset aria-hidden="true" className="jss9 MuiOutlinedInput-notchedOutline">
                                           <legend className="jss11">
                                               <span>Shop Name&nbsp;*</span></legend>
                                       </fieldset>
                                   </div>
                               </div>
                               <i className="fal fa-building"></i>
                           </div>
                           <div className="seller-input input-icon dual-input">


                               <div className="MuiFormControl-root">
                                   <label className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined" data-shrink="false">Bank List *</label>
                                   <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl">
                                       <div className="MuiSelect-root MuiSelect-select MuiSelect-selectMenu MuiSelect-outlined MuiInputBase-input MuiOutlinedInput-input" tabIndex="0" role="button" aria-haspopup="listbox">
                                           <span>&ZeroWidthSpace;</span>
                                       </div>
                                       // <input aria-hidden="true" tabIndex="-1" className="MuiSelect-nativeInput" value="" />
                                       <sv g className="MuiSvgIcon-root MuiSelect-icon MuiSelect-iconOutlined" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                           <path d="M7 10l5 5 5-5z">
                                           </path>
                                       </svg>
                                       <fieldset aria-hidden="true" className="jss9 MuiOutlinedInput-notchedOutline">
                                           <legend className="jss11">
                                               <span>Bank Name</span>
                                           </legend>
                                       </fieldset>
                                   </div>
                               </div>
                           </div>
                           <div className="seller-input input-icon seller-acc">

                               <div className="MuiFormControl-root MuiTextField-root">
                                   <label className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined Mui-required Mui-required" data-shrink="false">Account Number<span aria-hidden="true" className="MuiFormLabel-asterisk MuiInputLabel-asterisk">&thinsp;*</span></label>
                                   <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl">
                                       // <input aria-invalid="false" autoComplete="new-password" required="" type="password" maxLength="18" minLength="9" className="MuiInputBase-input MuiOutlinedInput-input" value="" />
                                       <fieldset aria-hidden="true" className="jss9 MuiOutlinedInput-notchedOutline">
                                           <legend className="jss11">
                                               <span>Account Number&nbsp;*</span>
                                           </legend>
                                       </fieldset>
                                   </div>
                               </div>
                               <i className="far fa-credit-card"></i>
                           </div>
                           <div className="seller-input input-icon seller-acc">
                               <div className="MuiFormControl-root MuiTextField-root">
                                   <label className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined Mui-required Mui-required" data-shrink="false">Confirm Account Number<span aria-hidden="true" className="MuiFormLabel-asterisk MuiInputLabel-asterisk">&thinsp;*</span></label><div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl"><input aria-invalid="false" autoComplete="new-password" required="" type="text" maxLength="18" minLength="9" className="MuiInputBase-input MuiOutlinedInput-input" value="" />
                                       <fieldset aria-hidden="true" className="jss9 MuiOutlinedInput-notchedOutline"><legend className="jss11"><span>Confirm Account Number&nbsp;*</span></legend></fieldset>
                                   </div></div><i className="far fa-credit-card"></i></div><div className="seller-input dual-input"><div className="MuiFormControl-root MuiTextField-root"><label className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined Mui-required Mui-required" data-shrink="false">IFSC Code<span aria-hidden="true" className="MuiFormLabel-asterisk MuiInputLabel-asterisk">&thinsp;*</span></label><div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl">
                                       // <input aria-invalid="false" required="" type="text" maxLength="11" minLength="11" className="MuiInputBase-input MuiOutlinedInput-input" value="" />
                               <fieldset aria-hidden="true" className="jss9 MuiOutlinedInput-notchedOutline"><legend className="jss11"><span>IFSC Code&nbsp;*</span></legend></fieldset></div></div></div><div className="seller-input dual-input"><div className="MuiFormControl-root MuiTextField-root"><label className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined Mui-required Mui-required" data-shrink="false">Account Holder Name<span aria-hidden="true" className="MuiFormLabel-asterisk MuiInputLabel-asterisk">&thinsp;*</span></label><div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl"><input aria-invalid="false" required="" type="text" maxLength="30" minLength="2" className="MuiInputBase-input MuiOutlinedInput-input" value="" /><fieldset aria-hidden="true" className="jss9 MuiOutlinedInput-notchedOutline"><legend className="jss11"><span>Account Holder Name&nbsp;*</span></legend></fieldset></div></div></div></div><label className="label-text">GST Document *</label><div className="file-inputs"><input type="file" variant="outlined" className="file-in" name="upload" accept="application/pdf,.jpg ,.jpeg,.doc , .docx ,.png" required="" /><i className="fas fa-file-pdf"></i></div><label className="label-text">Image Upload *</label><div className="file-inputs"><input type="file" name="myImage" className="file-in" /><i className="fas fa-solid fa-upload"></i></div><div className="add-links"><button type="submit" className="btn-purple">submit</button></div></form>*/}</div></div>


    </>)
}

export default SellerOnlineForm