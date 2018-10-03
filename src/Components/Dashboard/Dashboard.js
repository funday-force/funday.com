import React, { Component } from 'react';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    };
  }

  async componentDidMount() {
    let userData = await axios.get('/api/user-data');

    this.props.updateUser(userData.data);
  }

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
      </div>
    );
  }
}
