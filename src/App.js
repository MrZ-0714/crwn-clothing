//react
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

//components
import Header from "./components/header/header.compenent";

//pages
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import CheckoutPage from "./pages/checkout/checkout.component";

//setup firebase
import {
  auth,
  createUserProfileDocument,
  // addCollectionAndDocuments,
} from "./firebase/firebase.utils";

//setup redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { setCurrentUserAction } from "./redux/user/user.action";
import { selectCurrentUser } from "./redux/user/user.selectors";
// import { selectCollectionForPreview } from "./redux/shop/shop.selectors";

class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     currentUser: null,
  //   };
  // }

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUserProps//, collectionsArray 
    } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUserProps({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUserProps(userAuth);
      }
      // addCollectionAndDocuments("collections", collectionsArray.map(({title, items}) => ({title, items})));
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     setCurrentUserProps: function (user) {
//       return dispatch(setCurrentUserAction(user));
//     },
//   };
// }

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collectionsArray: selectCollectionForPreview,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUserProps: (user) => dispatch(setCurrentUserAction(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
