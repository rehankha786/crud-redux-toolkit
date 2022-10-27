import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import uuid from "react-uuid";
import { addUser, removeUser, updateUser } from "../features/Users";
import "../Input/Input.css";
const Input = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  const [text, setText] = useState("");
  const addhandler = (e) => {
    e.preventDefault();
    dispatch(addUser({ id: uuid(), text }));
    setText("");
  };
  return (
    <div className="body">
      <h1>FORM INPUT</h1>
      <form>
        <div className="form-input">
          <input
            type="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="enter name"
          />
        </div>
        <br />
        <br />
        <div style={{ paddingLeft: "22%" }}>
          <button className="btn btn-info" onClick={addhandler}>
            ADD TEXT
          </button>
        </div>
      </form>
      {userList.map((item) => {
        const { id, text } = item;
        return (
          <div key={id}>
            <h2>{text}</h2>

            <button
              className="btn btn-sm btn-danger"
              onClick={() => dispatch(removeUser({ id }))}
            >
              remove
            </button>
            <Link to="/edit" state={{ item }}>
              <button className="btn btn-sm btn-success">Update</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Input;
