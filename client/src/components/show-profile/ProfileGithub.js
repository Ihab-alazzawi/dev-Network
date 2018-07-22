import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProfileGithub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientId: '108dabaf9ef57595041e',
      clientSecret: '44bc9f9010eaf9b3e8308fcf044cfa0e77318b9e',
      count: 4,
      sort: 'created: asc',
      repos: []
    };
  }
  // componentDidMount() {
  //   const { githubuser } = this.props;
  // }
  render() {
    const { githubuser } = this.props;

    return;
    <div>{githubuser}</div>;
  }
}

ProfileGithub.propTypes = {
  githubuser: PropTypes.object.isRequired
};

export default ProfileGithub;
