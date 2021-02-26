import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "../CloseIcon/CloseIcon";
import { setError } from "../../redux/actions/index";

const ErrorAlert = () => {
  const message = useSelector((state) => state.message);
  const dispatch = useDispatch();
  return (
    <>
      {message && (
        <div
          className="alert alert-danger d-flex justify-content-between"
          role="alert"
        >
          <div>{message}</div>
          <div>
            <span
              onClick={() => dispatch(setError(""))}
              style={{ cursor: "pointer" }}
            >
              <CloseIcon />
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default ErrorAlert;
