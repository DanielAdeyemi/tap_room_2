import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

export default function NewKegForm(props) {
  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      kegName: event.target.kegName.value,
      kegBrand: event.target.kegBrand.value,
      kegAlcohol: event.target.kegAlcohol.value,
      kegPrice: event.target.kegPrice.value,
      kegLeftover: 5,
      id: v4()
    });
  }
  return(
    <>
      <form onSubmit={handleNewKegFormSubmission}>
        <input type="text" name="kegName" placeholder="Name of this wonderful keg" required />
        <input type="text" name="kegBrand" placeholder="Brand of beer" required />
        <input type="number" min="0" step="0.01" max="35" name="kegPrice" placeholder="Price for one pint" required />
        <input type="number" min="0" step="0.01" max="72" name="kegAlcohol" placeholder="% of alcohol" required />
        <button type="submit">Add new keg</button>
      </form>
    </>
  );
}

NewKegForm.propTypes = {
  formSumbissionHandler: PropTypes.func,
  onNewKegCreation: PropTypes.func
};