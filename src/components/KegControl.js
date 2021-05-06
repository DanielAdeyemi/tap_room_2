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
      selectedKeg: null
    };
  }

  handleClick = () => {
    if(this.state.selectedKeg !== null) {
      this.setState({
        selectedKeg: null
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  };

  handleBuyPint = (id) => {
    const selectedKeg = this.props.mainKegList[id];
    if(selectedKeg.kegLeftover > 0) {
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
      this.props.mainKegList[id];
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
    }else if(this.props.formVisibleOnPage) {
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
KegControl.propTypes = {
  mainKegList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    mainKegList: state.mainKegList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

KegControl = connect(mapStateToProps)(KegControl);

KegControl.propTypes = {
  mainKegList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};