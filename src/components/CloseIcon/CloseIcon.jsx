import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const CloseIcon = () => {
  return (
    <>
      <FontAwesomeIcon icon={faTimes} style={{ padding: 1 }} />
    </>
  );
};

export default CloseIcon;
