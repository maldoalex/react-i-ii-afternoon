import React from "react";

function Delete(props) {
  return (
    <div>
      <button id="delete" onClick={props.delete}>
        Delete
      </button>
    </div>
  );
}

export default Delete;
