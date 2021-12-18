import { useContext } from "react";
import { createContext } from "react";
import { useUserReducer } from "./reducers";

const UserContext = createContext([[], () => {}]);
const { Provider } = UserContext;

// wrapper for the provider
const UserProvider = ({ user, children }) => {
	const [state, dispatch] = useUserReducer({
		userName: "",
		displayForm: false,
		plants: [],
	});

	return <Provider value={[state, dispatch]}>{children}</Provider>;
};

const useUserContext = () => {
	return useContext(UserContext);
};

export { UserProvider, useUserContext };
