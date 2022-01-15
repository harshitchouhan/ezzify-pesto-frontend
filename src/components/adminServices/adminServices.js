import React, { useContext, useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import { ApiCallsContext } from "../../services/api.service";
import { catchHandler } from "../../utlis/catchHandler.utlis";
import { API_URLS } from "../../utlis/constants";
import CustomPagination from "../atmoic/customPagination";
import ModalBase from "../atmoic/modal/modal";
import ServiceForm from "../serviceForm/serviceForm";

import AdminServiceTile from "./../adminServiceTile/adminServiceTile";

import "./adminServices.scss";

const AdminServices = () => {
  const ApiContext = useContext(ApiCallsContext);
  const [show, setShow] = useState(false);
  const [services, setServices] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(4);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    const response = await catchHandler(fetchServicesAPI);

    setServices(response);

    console.log(response);
  };

  const fetchServicesAPI = async () => {
    const data = await ApiContext.getData(API_URLS.VIEW_SERVICES);
    return data;
  };

  return (
    <>
      <div className="adminServices container">
        <div className="adminServices__header d-flex align-items-center justify-content-between">
          <h2>You have got {services.length} Services</h2>
          <span onClick={() => setShow(true)}>Add New Service</span>
        </div>
        <div className="adminServices__body">
          {Array.isArray(services) &&
            services.length > 0 &&
            services
              .slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize)
              .map((service, index) => <AdminServiceTile key={index} {...service} />)}
        </div>

        <CustomPagination records={services} pageSize={pageSize} page={page} setPage={setPage} />
      </div>

      <ModalBase show={show} size="lg">
        <ServiceForm setShow={setShow} />
      </ModalBase>
    </>
  );
};

export default AdminServices;
