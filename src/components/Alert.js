import { Component } from "react";

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
    this.bgColor = null;
  }

  getStyle = () => {
    return {
      color: this.color,
      backgroundColor: this.bgColor,
      borderWidth: "2px",
      borderStyle: "solid",
      fontWeight: "bolder",
      borderRadius: "7px",
      borderColor: this.borderColor,
      textAlign: "center",
      fontSize: "12px",
      margin: "10px 0",
      padding: "10px",
    };
  };

  render() {
    return (
      <div className="Alert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "rgb(0, 0, 255)"; // blue
    this.bgColor = "rgb(249, 249, 249)"; //
    this.borderColor = "rgb(0, 0, 255)";
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "rgb(255, 0, 0)";
    this.bgColor = "rgb(249, 249, 249)";
    this.borderColor = "rgb(255, 0, 0)";
  }
}

class WarningAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "rgb(255, 206, 0)";
    this.bgColor = "rgb(249, 249, 249)";
    this.borderColor = "rgb(255, 206, 0)";
  }
}

export { InfoAlert, ErrorAlert, WarningAlert };
