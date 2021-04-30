import React from "react";

export default class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainKegList = [],
      selectedKeg = null
    };
  }

  render() {
    let currentlyVisibleState = null;
    return(
      <>
        {currentlyVisibleState}
      </>
    );
  }
}