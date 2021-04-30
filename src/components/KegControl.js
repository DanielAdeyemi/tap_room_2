import React from "react";
import KegList from "./KegList";
import NewKegForm from "./NewKegForm";

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
    let buttonText = null;
    if(this.state.formVisibleOnPage) {
      currentlyVisibleState = 
      <NewKegForm
        onNewKegCreation={this.handleAddingNewKegToList}
      />;
      buttonText = "Add Keg";
    } else {
    currentlyVisibleState = 
      <KegList
        kegList={this.state.mainKegList}
        onKegSelection={this.handleChangingSelectedKeg}
      />;
      buttonText = "Add Keg";
    }
    return(
      <>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </>
    );
  }
}