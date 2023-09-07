import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { Task } from "./interfaces";

export default function Todo({
  id,
  ischecked,
  Description,
  handleChange,
}: Task) {
  return (
    <div className="todo" id={id}>
      <div className="check">
        <input
          onChange={() => handleChange(id, "toggle")}
          type="checkbox"
          checked={ischecked}
          className="crosshair"
        />
        <h2 className={ischecked ? "strike" : ""}>{Description}</h2>
      </div>
      <FontAwesomeIcon
        icon={faClose}
        color="black"
        onClick={() => handleChange(id, "delete")}
        className="crosshair"
      />
    </div>
  );
}
