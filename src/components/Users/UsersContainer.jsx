import {
  followTС,
  loadUsersNumber,
  loadUsersTС,
  loadSpecificUsersPageTС,
  unfollowTС,
} from "../../redux/usersReducer";
import UsersContainerAPI from "./UsersContainerAPI";
import { connect } from "react-redux";
import withAuthRedirect from "../../hok/withAuthRedirect";
import { compose } from "redux";

const mapStateToConnect = (state) => {
  return {
    users: state.usersPage.users,
    numOfUsersPerPage: state.usersPage.numOfUsersPerPage,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

// const mapDispatchToConnect = (dispatch) => {
//   return {
//     follow: (id) => {
//       dispatch(follow(id));
//     },
//     unfollow: (id) => {
//       dispatch(unfollow(id));
//     },
//     loadUsers: (users) => {
//       dispatch(loadUsers(users));
//     },
//     onPageChange: (page) => {
//       dispatch(onPageChange(page));
//     },
//     loadUsersNumber: (usersNumber) => {
//       dispatch(loadUsersNumber(usersNumber));
//     },
//     spinerIsFetching: (isFetching) => {
//       dispatch(spinerIsFetching(isFetching));
//     },
//   };
// };

// export default connect(
//   mapStateToConnect,
//   mapDispatchToConnect
// )(UsersContainerAPI);

export default compose(
  connect(mapStateToConnect, {
    followTС,
    loadUsersNumber,
    loadUsersTС,
    loadSpecificUsersPageTС,
    unfollowTС,
  }),
  withAuthRedirect
)(UsersContainerAPI);
