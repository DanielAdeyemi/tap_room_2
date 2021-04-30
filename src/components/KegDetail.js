import React from "react";
import PropTypes from "prop-types";

export default function KegDetail(props) {
  const { keg } = props;
  return(
    <>
      <h2>About {keg.kegName}</h2>
      <h3>Brand: {keg.kegBrand}</h3>
      <p>Contains: {keg.kegAlcohol}% of Alcohol</p>
      <p><b>Price for pint: </b> {keg.kegPrice}</p>
      <p>Amount left(in pints): {keg.kegLeftover}</p>
    </>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object
}