import {
	type HTMLAttributes,
	forwardRef,
	useEffect,
	useId,
	useRef,
	useState,
} from 'react';
import type { OmitAtomProps } from '../../types/atoms';
import { Box } from '../Box';
import { MenubarMenuContext } from './context/MenubarMenuContext';

export interface MenubarMenu
	extends HTMLAttributes<HTMLDivElement>,
		OmitAtomProps {}

export const MenubarMenu = forwardRef<HTMLDivElement, MenubarMenu>(
	({ children, ...restProps }, ref) => {
		const triggerRef = useRef<HTMLDivElement>(null);
		const wasKeyboardTriggerOpenRef = useRef(false);

		const [isSelected, setIsSelected] = useState(false);

		useEffect(() => {
			if (!open) wasKeyboardTriggerOpenRef.current = false;
		}, [open]);

		const contextValue = {
			triggerId: useId(),
			triggerRef,
			contentId: useId(),
			wasKeyboardTriggerOpenRef,
			isSelected,
			setIsSelected,
		};

		return (
			<MenubarMenuContext.Provider value={contextValue}>
				<Box position='relative' ref={ref} {...restProps}>
					{children}
				</Box>
			</MenubarMenuContext.Provider>
		);
	},
);
