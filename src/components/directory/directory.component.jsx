import React from "react";

import MenuItem from "../menu-item/menu-item.component";
import directoryData from "./directory.data"
import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      session: directoryData
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.session.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
