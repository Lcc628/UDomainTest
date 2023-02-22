import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [
        {
          id: "1",
          text: "Row 1"
        },
        {
          id: "2",
          text: "Row 2"
        },
        {
          id: "3",
          text: "Row 3"
        }
      ]
    };
  }
  removeRow = (id) => {
    console.log(id);
    const group = this.state.groups;

    let newList = group.filter((i) => {
      return i.id !== id;
    });

    this.setState({ groups: newList });
  };
  render() {
    let rRow = (id) => this.removeRow(id);
    return (
      <div>
        <p>Question: Please fix the delete button:</p>
        {this.state.groups.map((g) => (
          <div key={g.id}>
            {g.text} <button onClick={() => rRow(g.id)}>Delete</button>
          </div>
        ))}
      </div>
    );
  }
}
export default App;
