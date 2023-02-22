import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  showList(id) {
    let output = [];
    switch (id) {
      case 0:
        output.push(<div key={id}>First</div>);
        break;
      case 1:
        output.push(<div key={id}>Next</div>);
        break;
      case 2:
        output.push(<div key={id}>Then</div>);
        break;
      default:
        output.push(<div key={id}>Last</div>);
    }
    return output;
  }

  render() {
    let numberForControlOutput = 0;
    let divList = [];
    for (let i = 4; i > 0; i--) {
      for (let j = 0; j < i; j++) {
        divList.push(this.showList(j + numberForControlOutput));
      }
      divList.push(<p key={i}></p>);
      numberForControlOutput += 1;
    }

    return (
      <div>
        Question: Show this result in Answer:
        <div
          style={{ border: "1px solid blue", padding: 10, marginBottom: 20 }}
        >
          <div>First</div>
          <div>Next</div>
          <div>Then</div>
          <div>Last</div>
          <p></p>
          <div>Next</div>
          <div>Then</div>
          <div>Last</div>
          <p></p>
          <div>Then</div>
          <div>Last</div>
          <p></p>
          <div>Last</div>
          <p></p>
        </div>
        Answer:
        <div style={{ border: "1px solid red", padding: 10 }}>{divList}</div>
      </div>
    );
  }
}

export default App;

