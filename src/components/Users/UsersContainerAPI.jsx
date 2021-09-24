import React from "react";
import Users from "./Users";
import Preloader from "../../Additional Components/Preloader/Preloader";

class UsersContainerAPI extends React.Component {
  componentDidMount() {
    this.props.loadUsersTС(
      this.props.numOfUsersPerPage,
      this.props.currentPage
    );
    // this.props.spinerIsFetching(true);
    // usersAPI
    //   .loadUsers()
    //   .then((data) => {
    //     this.props.loadUsers(data.items);
    //     this.props.spinerIsFetching(false);
    //     // this.props.loadUsersNumber(res.data.totalCount);
    //   });
  }

  pageChange = (page) => {
    this.props.loadSpecificUsersPageTС(
      page,
      this.props.numOfUsersPerPage,
      this.props.currentPage
    );
  };

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            totalUsersCount={this.props.totalUsersCount}
            numOfUsersPerPage={this.props.numOfUsersPerPage}
            currentPage={this.props.currentPage}
            users={this.props.users}
            pageChange={this.pageChange}
            follow={this.props.followTС}
            unfollow={this.props.unfollowTС}
          />
        )}
      </>
    );
  }
}

export default UsersContainerAPI;
