import React, { useState } from "react";

import { ADD_PLANT, TOGGLE_FORM } from "../utils/actions";
import { useUserContext } from "../utils/user.context";

import { add, isDate } from "date-fns";

export default function NewPlantForm() {
	const [state, dispatch] = useUserContext();
	const [plantName, setPlantName] = useState("");
	const [quantity, setQuantity] = useState(null);
	const [frequency, setFrequency] = useState(null);

	const displayForm = state.displayForm;

	const toggleDisplayForm = (e) => {
		e.preventDefault();
		dispatch({ type: TOGGLE_FORM });
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		const timestamp = createFutureTimestamp(frequency);
		const plantData = { plantName, quantity, frequency, timestamp };
		const formStatus = validateFormData(plantData);
		if (!formStatus.error) {
			dispatch({ type: ADD_PLANT, plant: plantData });
			dispatch({ type: TOGGLE_FORM });
		} else {
      const trimmedStatus = formStatus.error.trim().replace(/(,$)/g ,'')
			alert(trimmedStatus);
		}
	};

	const createFutureTimestamp = (frequency) => {
		const timestamp = new Date();
		return add(timestamp, { days: frequency });
	};

	const validateFormData = (formData) => {
		const { plantName, quantity, frequency, timestamp } = formData;

		const plantStatus = { error: '' };

		if (!plantName.trim()) {
			plantStatus.error = "Plant name required, ";
		}
		if (quantity <= 0) {
			plantStatus.error += "Water Quantity required, ";
		}
		if (frequency <= 0) {
			plantStatus.error += "Water Frequency required, ";
			plantStatus.status = false;
		}
		if (!isDate(timestamp)) {
			plantStatus.error += "Failed to generate timestamp";
		}

		return plantStatus;
	};

	return (
		<div className="add">
			{displayForm ? (
				<form className="add__container">
					<input
						type="text"
						placeholder="Plant name."
						className="pName"
						onChange={(e) => setPlantName(e.target.value)}
					/>
					<input
						type="text"
						placeholder="How much water?"
						className="aWater"
						onChange={(e) => setQuantity(parseInt(e.target.value))}
					/>
					<input
						type="text"
						placeholder="How often?"
						className="often"
						onChange={(e) => setFrequency(parseInt(e.target.value))}
					/>
					<button className="add___btn" onClick={(e) => handleFormSubmit(e)}>
						add
					</button>
				</form>
			) : (
				<div onClick={(e) => toggleDisplayForm(e)}>
					<span className="material-icons">add</span>
				</div>
			)}
		</div>
	);
}
