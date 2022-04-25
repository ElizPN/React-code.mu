// parent class component
class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper />
      </div>
    );
  }
}

// child class component
class Camper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <p>{this.props.name}</p>; // use this to acces to prop
  }
}

//set default value for  prop
Camper.defaultProps = {
  name: "CamperBot",
};

// set type fpr prop
Camper.propTypes = { name: PropTypes.string.isRequired };
