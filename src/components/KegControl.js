import React from "react";
import KegDetail from "./KegDetail";
import KegList from "./KegList";
import NewKegForm from "./NewKegForm";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions';

export default class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
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

  handleBuyPint = (id) => {
    const selectedKeg = this.state.mainKegList.filter((keg) =>keg.id === id)[0];
    if(selectedKeg.kegLeftover >= 1) {
      selectedKeg.kegLeftover --;
    }
    this.setState({ selectedKeg: selectedKeg });
  }

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const action = a.addKeg(newKeg);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  };

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = 
      this.state.mainKegList.filter((keg) => keg.id === id)[0];
      this.setState({ selectedKeg: selectedKeg});
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedKeg !== null) {
      currentlyVisibleState = 
      <KegDetail
        keg={this.state.selectedKeg}
      />
      buttonText = "Return to the Keg List";
    }else if(this.state.formVisibleOnPage) {
      currentlyVisibleState = 
      <NewKegForm
        onNewKegCreation={this.handleAddingNewKegToList}
      />;
      buttonText = "Return to the keg list";
    } else {
    currentlyVisibleState = 
      <KegList
        kegList={this.state.mainKegList}
        onKegSelection={this.handleChangingSelectedKeg}
        buyPint={this.handleBuyPint}
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
KegControl.propTypes = {
  mainKegList: PropTypes.object
};

KegControl = connect()(KegControl);