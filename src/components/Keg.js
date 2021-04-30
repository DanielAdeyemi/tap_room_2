import React from "react";
import PropTypes from "prop-types";

export default function Keg(props) {
  let left = props.kegLeftover > 0 ? props.kegLeftover : "Empty";
  return(
    <>
      <div onClick={() => props.whenKegClicked(props.id)}>
      <h3> {props.kegName} / <i>{props.kegBrand}</i></h3>
      <p>{left > 0 ? "We have some beer for you" : ""}</p>
      </div>
      <button onClick={() => props.whenBuyPintClicked(props.id)}>Buy pint</button>
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
    whenKegClicked: PropTypes.func,
    whenBuyPintClicked: PropTypes.func
  }