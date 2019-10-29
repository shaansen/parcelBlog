import React from "react";
import { connect } from "react-redux";

class UserHeader extends React.Component {
  render() {
    const user = this.props.users.find(user => user.id === this.props.userId);
    return <div>{user && user.name}</div>;
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps)(UserHeader);
