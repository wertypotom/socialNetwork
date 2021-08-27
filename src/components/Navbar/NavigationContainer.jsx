import { connect } from "react-redux";
import Navbar from "./Navigation";

const mapStateToProps = (state) => {
  return {
    links: state.navBarPage.links,
    usersData: state.navBarPage.usersData,
  };
};

const NavigationContainer = connect(mapStateToProps)(Navbar);

export default NavigationContainer;
