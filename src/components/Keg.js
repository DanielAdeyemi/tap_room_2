import React from "react";
import PropTypes from "prop-types";

export default function Keg(props) {
  return(
    <>
      <div onClick = {() => props.whenKegClicked(props.id)}>
      <h3> {props.kegName} / <i>{props.kegBrand}</i></h3>
      </div>
    </>
  );

  Keg.propTypes = {
    kegName: PropTypes.string,
    kegBrand: PropTypes.string,
    kegPrice: PropTypes.number,
    kegAlchohol: PropTypes.number,
    id: PropTypes.string,
    whenKegClicked: PropTypes.func
  }
}