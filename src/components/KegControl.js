import React from "react";
import KegList from "./KegList";

export default class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainKegList: [],
      selectedKeg: null
    };
  }

  render() {
    let currentlyVisibleState = null;
    currentlyVisibleState = 
      <KegList
        kegList={this.state.mainKegList}
        onKegSelection={this.handleChangingSelectedKeg}
      />
    return(
      <>
        {currentlyVisibleState}
      </>
    );
  }
}