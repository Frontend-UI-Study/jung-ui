import { createContext, useContext } from 'react';

type AccordionContextState = {
	type?: 'single' | 'multiple';
	// setOpenIndexes: Dispatch<SetStateAction<Set<number>>>;
	openIndexes: Set<number>;
	handleToggleIndex: (index: number) => void;
};

export const AccordionContext = createContext<AccordionContextState | null>(
	null,
);

export const useAccordionContext = () => {
	const context = useContext(AccordionContext);
	if (!context) {
		throw new Error('It should be rendered in the Accordion component');
	}
	return context;
};
