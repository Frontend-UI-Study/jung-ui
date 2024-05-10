import {
	type Dispatch,
	type SetStateAction,
	createContext,
	useContext,
} from 'react';

type AccordionContextState = {
	setToggle: Dispatch<SetStateAction<boolean>>;
	toggle: boolean;
	handleToggle: () => void;
};

const initialState = {
	toggle: false,
	setToggle: () => {},
	handleToggle: () => {},
};

export const AccoridonContext =
	createContext<AccordionContextState>(initialState);

export const useAccordionContext = () => {
	const context = useContext(AccoridonContext);
	if (!context) {
		throw new Error('It should be rendered in the Accordion component');
	}
	return context;
};
