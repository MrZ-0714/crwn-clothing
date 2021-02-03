import React from "react";

import MenuItem from "../menu-item/menu-item.component";
//import directoryData from "./directory.data";
import "./directory.styles.scss";
//Redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

const Directory = ({ directoryData }) => (
  <div className="directory-menu">
    {directoryData.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  directoryData: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
