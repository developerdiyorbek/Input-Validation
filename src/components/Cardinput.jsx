import React from "react";
import ReactDOM from "react-dom";
import Cleave from "cleave.js/react";

class MyComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.onCreditCardChange = this.onCreditCardChange.bind(this);
    this.onCreditCardFocus = this.onCreditCardFocus.bind(this);
  }

  onCreditCardChange(event) {
    // formatted pretty value
    console.log(event.target.value);

    // raw value
    console.log(event.target.rawValue);
  }

  onCreditCardFocus(event) {
    // handle focus if needed
  }

  render() {
    const cleaveStyle = {
      border: "1px solid #ccc",
      padding: "10px",
      borderRadius: "5px",
      width: "100%",
      marginBottom: "10px",
    };

    return (
      <Cleave
        style={cleaveStyle}
        placeholder="Enter your credit card number"
        options={{ creditCard: true }}
        onFocus={this.onCreditCardFocus}
        onChange={this.onCreditCardChange}
      />
    );
  }
}

export default MyComponent;
