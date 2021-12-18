import { useReducer } from "react";
import { ADD_PLANT, UPDATE_PLANT, DELETE_PLANT, TOGGLE_FORM } from "./actions";

export const reducer = (state, action) => {
	switch (action.type) {
		case ADD_PLANT:
			return {
				...state,
				plants: [...state.plants, action.plant],
			};
		case DELETE_PLANT:
			const newPlants = state.plants.filter((plant) => plant !== action.plant);
			return {
				...state,
				plants: newPlants,
			};
		case TOGGLE_FORM:
			return {
				...state,
				displayForm: !state.displayForm
			}
		default:
			return state;
	}
};

export function useUserReducer(initialState) {
	return useReducer(reducer, initialState);
}
