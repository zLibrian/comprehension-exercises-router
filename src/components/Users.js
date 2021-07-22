// arquivo Users.js
import React, { Component } from 'react';

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

export default Users;

