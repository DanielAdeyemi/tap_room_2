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

  handleClick = () => {
    if(this.state.selectedKeg !== null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null
      });
    } else {
      this.setState((prevState) =>({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  };

  handleAddingNewKegToList = (newKeg) => {
    const newMainKegList = this.state.mainKegList.concat(newKeg);
    this.setState({
      mainKegList: newMainKegList,
      formVisibleOnPage: false
    });
  };

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