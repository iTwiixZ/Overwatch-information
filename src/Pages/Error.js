import React from "react";
import ErrorComponent from "../components/ErrorComponent";
import Header from "../components/Header";

function Error() {
  return (
    <div className="error_page">
      <Header />
      <ErrorComponent />
    </div>
  );
}

export default Error;
