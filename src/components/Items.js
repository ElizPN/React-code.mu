import React, { useState } from "react";
import PropTypes from "prop-types";

export const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>;
};

Items.propTypes = { quantity: PropTypes.number.isRequired };

Items.defaultProps = {
  quantity: 0,
};
