class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      messages: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  // Add handleChange() and submitMessage() methods here
  handleChange(event) {
    this.setState({ input: event.target.value, messages: this.state.messages });
  }

  submitMessage() {
    //  const newMessanges = this.state.input.split(",")
    this.setState({
      input: "",
      messages: [...this.state.messages, this.state.input],
    });
  }

  render() {
    const listMessanges = this.state.messages.map((message) => {
      return <li>{message}</li>;
    });

    return (
      <div>
        <h2>Type in a new Message:</h2>
        {/* Render an input, button, and ul below this line */}
        <input value={this.state.input} onChange={this.handleChange} />
        <button onClick={this.submitMessage}>BTN</button>

        <ul>{listMessanges}</ul>

        {/* Change code above this line */}
      </div>
    );
  }
}
