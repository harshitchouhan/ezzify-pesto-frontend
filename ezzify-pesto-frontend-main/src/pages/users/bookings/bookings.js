import React from 'react'

import "./bookings.scss";
import laundryIcon from "../../../assets/users/laundry.svg";
import paintingIcon from "../../../assets/users/painting.svg";
import repairingIcon from "../../../assets/users/repairing.svg"; 
function Booking() {
    return (
        <div className="container bookingPage">
            <div className="d-flex flex-row d-flex justify-content-center">
                    <b className="bookingPage__text mb-5">MY BOOKINGS</b>
            </div>
            <div className="container-fluid bookingPage__container_l1">
                <div className="d-flex flex-row">
                    <div className="col-lg-6 bookingPage__box">
                        <p className="bookingPage__text--active_text d-flex justify-content-center">ACTIVE</p>
                    </div>
                    <div className="col-lg-5 mt-3 bookingPage__text--history_text d-flex justify-content-center">
                        <b>HISTORY</b>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="bookingPage__box--box_2 mt-4 d-flex justify-content-center">
                    <table>
                        <tr>
                            <th className= "bookingPage__text--table">SERVICE</th>
                            <th className= "bookingPage__text--table">VENDOR NAME</th>
                            <th className= "bookingPage__text--table">VENDOR CONTACT</th>
                            <th className= "bookingPage__text--table">AMOUNT</th>
                            <th className= "bookingPage__text--table">STATUS</th>
                        </tr>
                        <tr>
                            <td className= "bookingPage__text--content_table">
                                <div className= "d-flex flex-row">
                                    <div className= "col-lg-2">
                                    <img src={laundryIcon} alt="laundry" />
                                    </div>
                                    <div className= "col-lg-2 ml-1">
                                        <p>LAUNDRY</p>
                                    </div>
                                </div>
                               
                            
                                
                            </td>
                            <td className= "bookingPage__text--content_table">Prateek Kawthekar</td>
                            <td className= "bookingPage__text--content_table">+91 9893370255</td>
                            <td className= "bookingPage__text--content_table">Rs.500</td>
                            <td className= "bookingPage__text--active_status">ACTIVE</td>
                        </tr>
                
                        <tr>
                            <td className= "bookingPage__text--content_table">
                            <div className= "d-flex flex-row">
                                    <div className= "col-lg-2">
                                    <img src={paintingIcon} alt="painting" />
                                    </div>
                                    <div className= "col-lg-2 ml-1">
                                        <p>PAINTING</p>
                                    </div>
                                </div>
                               
                            
                            </td>
                            <td className= "bookingPage__text--content_table">Prateek Kawthekar</td>
                            <td className= "bookingPage__text--content_table">+91 9893370255</td>
                            <td className= "bookingPage__text--content_table">Rs.500</td>
                            <td className= "bookingPage__text--active_status">ACTIVE</td>
                        </tr>

                        <tr>
                            <td className= "bookingPage__text--content_table">
                            <div className= "d-flex flex-row">
                                    <div className= "col-lg-2">
                                    <img src={repairingIcon} alt="repairing" />
                                    </div>
                                    <div className= "col-lg-2 ml-1">
                                        <p>REPAIRING</p>
                                    </div>
                                </div>
                               
                            
                            </td>
                            <td className= "bookingPage__text--content_table">Harshit Chouhan</td>
                            <td className= "bookingPage__text--content_table">+91 9893370255</td>
                            <td className= "bookingPage__text--content_table">Rs.500</td>
                            <td className= "bookingPage__text--active_status">ACTIVE</td>
                        </tr>

                    </table>
                </div>
            </div>
        </div>
        
    )
}

export default Booking

