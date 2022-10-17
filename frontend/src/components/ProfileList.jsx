import React, { Component } from "react";
import { render } from "react-dom";
import ProfileCard from './ProfileCard.jsx';

export default class ProfileList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.profiles.map((profile) => <ProfileCard />)}
      </div>
    );
  }
}
