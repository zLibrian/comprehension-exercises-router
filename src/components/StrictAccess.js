// StrictAccess.js
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

class StrictAccess extends Component {
  render() {
    const { user: { username, password } } = this.props;
    if (!(username==='dsa' && password === '1234')){
      alert('Access denied');
      return <Redirect to="/" />
    }
    return (
      <p>Welcome { username }!</p>
    );
  }
}

StrictAccess.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    password: PropTypes.string,
  }),
}.isRequired;

export default StrictAccess;
