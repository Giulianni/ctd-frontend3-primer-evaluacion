import React from "react";

class Buttons extends React.Component {
  render() {
    return (
      <div className="recordatorio">
        <div className="opcion">
          <button
            id="A"
            className="botones"
            onClick={() => {
              this.props.handlerChoice("a");
            }}
          >
            A
          </button>
          <h2>{this.props.subStoryA}</h2>
        </div>
        <div className="opcion">
          <button
            id="B"
            className="botones"
            onClick={() => {
              this.props.handlerChoice("b");
            }}
          >
            B
          </button>
          <h2>{this.props.subStoryB}</h2>
        </div>
      </div>
    );
  }
}

export default Buttons;
