import { useReducer } from "react";
import { ADD_PLANT, UPDATE_PLANT, DELETE_PLANT } from "./actions";

export const reducer = (state, action) => {
	switch (action.type) {
		case ADD_PLANT:
			return {
				...state,
				plants: [...state.plants, action.plant],
			};
		default:
			return state;
	}
};

export function useUserReducer(initialState) {
	return useReducer(reducer, initialState);
}
