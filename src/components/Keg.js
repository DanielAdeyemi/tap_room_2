import React from "react";
import PropTypes from "prop-types";

export default function Keg(props) {
  return(
    <>
      <div onClick={() => props.whenKegClicked(props.id)}>
      <h3> {props.kegName} / <i>{props.kegBrand}</i></h3>
      </div>
    </>
  );
}

  Keg.propTypes = {
    kegName: PropTypes.string.isRequired,
    kegBrand: PropTypes.string.isRequired,
    kegPrice: PropTypes.number.isRequired,
    kegAlcohol: PropTypes.number.isRequired,
    kegLeftover: PropTypes.number,
    id: PropTypes.string,
    whenKegClicked: PropTypes.func
  }