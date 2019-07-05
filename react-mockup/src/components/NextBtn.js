import React, { Component } from "react";

// class NextButton extends Component {
//   render(props) {
//     return (
//       <div>
//         <button onClick={e => props.increment()}>next</button>
//       </div>
//     );
//   }
// }

function NextButton(props) {
  return (
    <div>
      <button id="next" onClick={props.next}>
        Next>
      </button>
    </div>
  );
}

export default NextButton;
