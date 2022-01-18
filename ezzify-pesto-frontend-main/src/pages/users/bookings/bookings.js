import React from "react";

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
        <div className="row">
          <div className="col-6 bookingPage__box">
            <p className="bookingPage__text--active_text  d-flex justify-content-center">ACTIVE</p>
          </div>
          <div className="col-6 mt-3 bookingPage__text--history_text d-flex justify-content-center ">
            <b>HISTORY</b>
          </div>
        </div>
      </div>
      <div className="container-fluid pl-0 pr-0">
        <div className="bookingPage__box--box_2 mt-4 d-flex justify-content-center">
          <table>
            <tr className="bookingPage__border_line">
              <th className="bookingPage__text--table mb-6 ">SERVICE</th>
              <th className="bookingPage__text--table ">VENDOR NAME</th>
              <th className="bookingPage__text--table">VENDOR CONTACT</th>
              <th className="bookingPage__text--table">AMOUNT</th>
              <th className="bookingPage__text--table">STATUS</th>
            </tr>
            
            <tr className="bookingPage__border_line">
              <td className="bookingPage__text--content_table">
                <div className="d-flex flex-row align-items-center">
                  <img src={laundryIcon} alt="laundry" />
                  <p className=" mb-0 ml-4 ">LAUNDRY</p>
                </div>
              </td>
              <td className="bookingPage__text--content_table">Prateek Kawthekar</td>
              <td className="bookingPage__text--content_table">+91 9893370255</td>
              <td className="bookingPage__text--content_table">Rs.500</td>
              <td className="bookingPage__text--active_status">ACTIVE</td>
            </tr>

            <tr className="bookingPage__border_line">
              <td className="bookingPage__text--content_table">
                <div className="d-flex flex-row">
                  <img src={paintingIcon} alt="painting" />
                  <p className="ml-4 mb-0">PAINTING</p>
                </div>
              </td>
              <td className="bookingPage__text--content_table">Prateek Kawthekar</td>
              <td className="bookingPage__text--content_table">+91 9893370255</td>
              <td className="bookingPage__text--content_table">Rs.500</td>
              <td className="bookingPage__text--active_status">ACTIVE</td>
            </tr>

            <tr >
              <td className="bookingPage__text--content_table">
                <div className="d-flex flex-row">
                <img src={repairingIcon} alt="repairing" />
                <p className="ml-4 mb-0">REPAIRING</p>
                </div>
              </td>
              <td className="bookingPage__text--content_table">Harshit Chouhan</td>
              <td className="bookingPage__text--content_table">+91 9893370255</td>
              <td className="bookingPage__text--content_table">Rs.500</td>
              <td className="bookingPage__text--active_status">ACTIVE</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Booking;
