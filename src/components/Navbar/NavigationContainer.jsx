import { connect } from "react-redux";
import ShowContext from "../../ShowContext";
import Navbar from "./Navigation";

const NavigationContainer = () => {
  return (
    <ShowContext.Consumer>
      {(store) => {
        return (
          <Navbar
            links={store.getState().navBarPage.links}
            usersData={store.getState().navBarPage.usersData}
          />
        );
      }}
    </ShowContext.Consumer>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     links: state.navBarPage.links,
//     usersData: state.navBarPage.usersData,
//   };
// };

// const NavigationContainer = connect(mapStateToProps)(Navbar);

export default NavigationContainer;
