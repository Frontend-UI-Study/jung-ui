import { type Dispatch, createContext, useContext } from 'react';

type MenubarMenuContextValue = {
	triggerId: string;
	triggerRef: React.RefObject<HTMLElement>;
	contentId: string;
	wasKeyboardTriggerOpenRef: React.MutableRefObject<boolean>;
	isSelected: boolean;
	setIsSelected: Dispatch<React.SetStateAction<boolean>>;
};

export const MenubarMenuContext = createContext<MenubarMenuContextValue | null>(
	null,
);

export const useMenubarMenuContext = () => {
	const context = useContext(MenubarMenuContext);
	if (!context) {
		throw new Error('It should be rendered in the MenubarMenu component');
	}
	return context;
};
