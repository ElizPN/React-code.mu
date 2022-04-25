const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>;
};

Items.propTypes = { quantity: PropTypes.number.isRequired };

Items.defaultProps = {
  quantity: 0,
};

export class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />;
  }
}
