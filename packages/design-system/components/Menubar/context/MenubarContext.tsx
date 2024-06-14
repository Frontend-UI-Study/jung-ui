import { type Dispatch, createContext, useContext } from 'react';

type MenubarContextValue = {
	selectedMenu?: string;
	isOpen: boolean;
	onSelectedMenu: (menu: string) => void;

	onOpenMenu: () => void;
	onCloseMenu: () => void;
	setIsOpen: Dispatch<React.SetStateAction<boolean>>;
};

export const MenubarContext = createContext<MenubarContextValue | null>(null);

export const useMenubarContext = () => {
	const context = useContext(MenubarContext);
	if (!context) {
		throw new Error('It should be rendered in the Menubar component');
	}
	return context;
};
