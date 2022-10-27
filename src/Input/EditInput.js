import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { updateUser } from "../features/Users";

const EditInput = () => {
  const location = useLocation();
  //   const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id, text } = location.state.item;
  const [editdata, setEditdata] = useState(text);

  const updateHandler = () => {
    let obj = {
      id: id,
      text: editdata,
    };
    dispatch(updateUser(obj));
  };
  return (
    <div className="body">
      <h1>FORM INPUT</h1>
      <form>
        <div className="form-input">
          <input
            type="text"
            id="text"
            value={editdata}
            onChange={(e) => setEditdata(e.target.value)}
            placeholder="enter name"
          />
        </div>
        <br />
        <br />
        <Link to="/">
          <div style={{ paddingLeft: "22%" }}>
            <button className="btn btn-info" onClick={updateHandler}>
              Update
            </button>
          </div>
        </Link>
      </form>
    </div>
  );
};

export default EditInput;
