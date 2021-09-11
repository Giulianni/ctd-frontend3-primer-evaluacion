import React from "react";

class Story extends React.Component {
  render() {
    return <h1 className="historia">{this.props.story}</h1>;
  }
}

export default Story;
