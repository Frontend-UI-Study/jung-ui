import { createContext, useContext } from 'react';

type TabsContextState = {
	currentTab?: string | number;
	setCurrentTab: (tabId: string | number) => void;
};

const initialState = {
	currentTab: '',
	setCurrentTab: () => {},
};

export const TabsContext = createContext<TabsContextState>(initialState);

export const useTabsContext = () => {
	const context = useContext(TabsContext);
	if (!context) {
		throw new Error('It should be rendered in the Tabs component');
	}
	return context;
};
