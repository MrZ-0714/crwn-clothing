import React from "react";
import { Route } from "react-router-dom";

//import shopData from "./shop.data";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionContainer from "../../pages/collection/collection.container";
// import CollectionPage from "../../pages/collection/collection.component";
// import WithSpinner from "../../components/with-spinner/with-spinner.component";

// DB
// import {
//   firestore,
//   convertCollectionsSnapshotToMap,
// } from "../../firebase/firebase.utils";

// Redux
import { connect } from "react-redux";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
// import { createStructuredSelector } from "reselect";
//Redux-thunk
// import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";

//const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  // state = {
  //   loading: true,
  // };

  //unsubscribeFromSnapshot = null;

  componentDidMount() {
    // const { updateCollections } = this.props;

    // const collectionRef = firestore.collection("collections");

    // collectionRef.get().then(async (snapshot) => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({ loading: false });
    //});

    //collectionRef.onSnapshot();

    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match } = this.props;
    // const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  // updateCollections: (collectionsMap) =>
  //   dispatch(updateCollections(collectionsMap)),
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
