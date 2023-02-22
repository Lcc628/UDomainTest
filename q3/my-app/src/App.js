import React from "react";
import { isValidElement } from "react";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      output: [],
    };
    this.ref = React.createRef();
  }

  delay() {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, Math.floor(Math.random() * 1000 + 100));
    });
  }

  async getList() {
    let output = [];
    for (let i = 0; i < 10; i++) {
      await this.delay().then((result) => {
        output.push(<div key={i}>{i}</div>);
      });
    }
    const divText = this.ref.current?.textContent.split("").sort((a,b) => a-b);
    this.setState({ output: divText });
  }

  render() {
    if (this.state.output.length < 1) {
      this.getList();
    }
    return (
      <div>
        Question: Change 0-9 in random order (first in first out) in Answer,
        like the example below:
        <div
          ref={this.ref}
          style={{ border: "1px solid blue", padding: 10, marginBottom: 20 }}
        >
          <div>1</div>
          <div>3</div>
          <div>2</div>
          <div>4</div>
          <div>7</div>
          <div>9</div>
          <div>0</div>
          <div>5</div>
          <div>8</div>
          <div>6</div>
        </div>
        Answer:
        <div style={{ border: "1px solid red", padding: 10 }}>
          {this.state.output.map((e,i)=>(<div key={i}>{e}</div>))}
        </div>
      </div>
    );
  }
}

export default App;
