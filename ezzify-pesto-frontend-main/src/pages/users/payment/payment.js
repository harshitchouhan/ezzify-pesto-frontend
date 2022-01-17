import React from 'react'

import driverIcon from "./../../../assets/users/driver_image.svg";
import laundryIcon from "../../../assets/users/laundry.svg";
import starIcon from "../../../assets/users/star.svg";
import toggleIcon from "../../../assets/users/toggle.svg";
import rupeeIcon from "../../../assets/users/rupee.svg";


import "./payment.scss";
function Payment() {
    return (
        <div className="container paymentPage mb-5">
            <div className="d-flex flex-row d-flex justify-content-center paymentPage__text">
                <b>PAYMENT</b>
            </div>

            <div className="container paymentPage__box">
                <div className="d-flex flex-row">
                    <div className="paymentPage__box ml-4 w-100 mr-4">
                        <div className="d-flex flex-row">
                            <img className="ml-4" src={driverIcon} alt="driverIcon" />
                            <div className="col-lg-3">
                                <div className="row">
                                <img className="ml-5" src={laundryIcon} alt="laundry" />
                              <span className="ml-3 mt-1 mb-0 paymentPage__text--service_text ">LAUNDRY</span>
                              <span className=" ml-5 mb-0 paymentPage__text--vendor_text">Anmol Laundry</span>
                                </div>
                                <img className= "ml-4 mb-2" src={starIcon} alt="rating" />
                                <span className="paymentPage__text--rating ml-2">4.5</span>
                            
                            </div>
                            <div className="col-lg-8 mb-0">
                                <div className="d-flex flex-row-reverse">
                                <img className="mr-5 mt-3" src={toggleIcon} alt="toggle" />
                                </div>
                                <div className="d-flex flex-row-reverse">
                                <img className="paymentPage__rupee_img mt-4" src={rupeeIcon} alt="rupee" /> 
                                <span className= "paymentPage__text--baseprice pr-2">140 Rs.</span>                           
                                    </div>
                                
                            </div>
                        </div>
                    </div>

                </div>
            </div>




            
        </div>
    )
}

export default Payment
