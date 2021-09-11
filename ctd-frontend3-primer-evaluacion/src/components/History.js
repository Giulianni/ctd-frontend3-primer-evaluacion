import React from "react";

class History extends React.Component {
  render() {
    const { choicesHistory } = this.props;
    //console.log(choicesHistory);
    const prevChoice = choicesHistory
      ? choicesHistory[choicesHistory.length - 2]
      : "";
    return (
      <div className="recordatorio">
        <h3>Selección anterior: {prevChoice}</h3>
        <h4>Historial de opciones elegidas:</h4>
        <ul>
          {choicesHistory
            ? choicesHistory.map((opcion, i) => <li key={i}>{opcion}</li>)
            : []}
        </ul>
      </div>
    );
  }
}

export default History;
