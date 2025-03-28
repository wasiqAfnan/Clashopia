import React from "react";
import { ClipLoader } from "react-spinners";

function Loader({ loading }) {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "50vh" }}>
      <ClipLoader color="#007bff" loading={loading} size={60} />
    </div>
  );
}

export default Loader;
