import React, { Component } from "react";

// class PrevButton extends Component {
//   render(props) {
//     return (
//       <div>
//         <button onClick={e => props.decrement()}>Previous</button>
//       </div>
//     );
//   }
// }

function PrevButton(props) {
  return (
    <div>
      <button id="previous" class="previous" onClick={props.previous}>
        {" "}
        Previous{" "}
      </button>
    </div>
  );
}

export default PrevButton;
