import React from "react";
import History from "./History";
import Buttons from "./Buttons";
import Story from "./Story";
import swal from "sweetalert2";
import data from "./data.json";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      choicesHistory: []
    };

    this.handlerSubStoryChoice = this.handlerSubStoryChoice.bind(this);
  }

  componentDidMount() {
    swal.fire({
      title: `
      <h4 class="swalTitle">Do you want to play a game?</h4>
      <p class="swalText">The rules are simple...</p>
      `,
      confirmButtonColor: "#0000",
      confirmButtonText: "Start"
    });
  }

  handlerSubStoryChoice(choice) {
    let offset = 0;
    let arrayLength = this.state.choicesHistory.length;

    if (
      this.state.currentIndex === 0 ||
      this.state.choicesHistory[arrayLength - 1] === "b"
    ) {
      offset = choice === "a" ? 1 : 2;
    } else {
      offset = choice === "a" ? 2 : 3;
    }

    if (data[this.state.currentIndex + offset]) {
      this.setState({
        choicesHistory: [...this.state.choicesHistory, choice],
        currentIndex: this.state.currentIndex + offset
      });
    } else {
      swal.fire({
        title: `
        <h4 class="swalTitle">The end!</h4>
        <p class="swalText">Congratulations. You are still alive.</p>
        `,
        confirmButtonColor: "#0000",
        confirmButtonText: "Thanks"
      });
    }
  }

  render() {
    return (
      <div className="layout">
        <Story story={data[this.state.currentIndex].historia} />

        <Buttons
          handlerChoice={this.handlerSubStoryChoice}
          subStoryA={data[this.state.currentIndex].opciones.a}
          subStoryB={data[this.state.currentIndex].opciones.b}
        />

        <History choicesHistory={this.state.choicesHistory} />
      </div>
    );
  }
}

export default Main;
