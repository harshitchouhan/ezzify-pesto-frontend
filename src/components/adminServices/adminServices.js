import React from "react";

import AdminServiceTile from "./../adminServiceTile/adminServiceTile";

import "./adminServices.scss";

const AdminServices = () => {
  return (
    <div className="adminServices container">
      <div className="adminServices__header d-flex align-items-center justify-content-between">
        <h2>You have got 8 Services</h2>
        <span>Add New Service</span>
      </div>
      <div className="adminServices__body">
        <AdminServiceTile />
        <AdminServiceTile />
        <AdminServiceTile />
        <AdminServiceTile />
      </div>
    </div>
  );
};

export default AdminServices;
