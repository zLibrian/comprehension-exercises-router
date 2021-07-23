import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Users extends Component {
  render() {
    const { greetingsMessage, match:{ params: { id } } } = this.props;
    console.log(this.props);
    return (
      <div>
        <h2>Users</h2>
        <p> { greetingsMessage }, My awesome Users component { id } </p>
      </div>
    );
  }
};

Users.propTypes = {
  greetingsMessage: PropTypes.string,
  id: PropTypes.number,
}.isRequired;

export default Users;
