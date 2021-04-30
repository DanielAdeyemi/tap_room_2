import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

export default function KegList(props) {
  return(
    <>
      {props.kegList.map((keg) =>
        <Keg 
          whenKegClicked={props.onKegSelection}
          kegName={keg.kegName}
          kegBrand={keg.kegBrand}
          kegPrice={keg.kegPrice}
          kegAlcohol={keg.kegAlcohol}
        />
      )}
    </>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
};