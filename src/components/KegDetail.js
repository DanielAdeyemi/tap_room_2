import React from "react";
import PropTypes from "prop-types";

export default function KegDetail(props) {
  const { keg } = props;
  let { message } = props;
  if(keg.kegLeftover <= 0) {
    message = "Out of stock";
  } else if (keg.kegLeftover <= 20) {
    message = "*Low Stock!*";
  }
  return (
		<>
			<h2>About {keg.kegName}</h2>
			<h3>Brand: {keg.kegBrand}</h3>
			<p>Contains: {keg.kegAlcohol}% of Alcohol</p>
			<p>
				<b>Price for pint: </b> ${keg.kegPrice}
			</p>
			<p><b><i>{message}</i></b> Amount left(in pints): {keg.kegLeftover}</p>
		</>
	);
}

KegDetail.propTypes = {
  keg: PropTypes.object, 
  message: PropTypes.string
}