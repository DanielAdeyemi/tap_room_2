import React from "react";
import KegDetail from "./KegDetail";
import KegList from "./KegList";
import NewKegForm from "./NewKegForm";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions';

export default class KegControl extends React.Component {

  handleClick = () => {
    const { dispatch } = this.props;
    if(this.props.selectedKeg !== null) {
      const action1 = a.checkoutKeg();
      dispatch(action1);
    } else {
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleBuyPint = (id) => {
    const { dispatch } = this.props;
    const selectedKeg = this.props.mainKegList[id];
    if(selectedKeg.kegLeftover > 0) {
      selectedKeg.kegLeftover --;
    }
    const action = a.checkinKeg(selectedKeg);
    dispatch(action);
  }

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const action = a.addKeg(newKeg);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  };

  handleChangingSelectedKeg = (id) => {
    const { dispatch } = this.props;
    const selectedKeg = 
      this.props.mainKegList[id];
      const action = a.checkinKeg(selectedKeg);
			dispatch(action);
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.props.selectedKeg !== null) {
      currentlyVisibleState = 
      <KegDetail
        keg={this.props.selectedKeg}
      />
      buttonText = "Return to the Keg List";
    } else 
    if (this.props.formVisibleOnPage) {
      currentlyVisibleState = 
      <NewKegForm
        onNewKegCreation={this.handleAddingNewKegToList}
      />;
      buttonText = "Return to the keg list";
    } else {
    currentlyVisibleState = 
      <KegList
        kegList={this.props.mainKegList}
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

const mapStateToProps = state => {
  return {
    mainKegList: state.mainKegList,
    selectedKeg: state.selectedKeg,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

KegControl = connect(mapStateToProps)(KegControl);

KegControl.propTypes = {
  mainKegList: PropTypes.object,
  selectedKeg: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};