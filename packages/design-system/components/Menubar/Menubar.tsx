import { useOutsideClick } from '@jung/shared/hooks';
import {
	type HTMLAttributes,
	forwardRef,
	useCallback,
	useRef,
	useState,
} from 'react';
import type { OmitAtomProps } from '../../types/atoms';
import { Box } from '../Box';
import * as styles from './Menubar.css';
import { MenubarContext } from './context/MenubarContext';

export interface MenubarProps
	extends HTMLAttributes<HTMLDivElement>,
		OmitAtomProps {
	defaultValue?: string;
	onValueChange?: (value: string) => void;
}

export const Menubar = forwardRef<HTMLDivElement, MenubarProps>(
	({ children, defaultValue, onValueChange, ...restProps }, ref) => {
		const [isOpen, setIsOpen] = useState(false);
		const [selectedMenu, setSelectedMenu] = useState(defaultValue);
		const onCloseMenu = useCallback(
			() => setSelectedMenu(''),
			[setSelectedMenu],
		);

		const onSelectedMenu = useCallback(
			(menu: string) => setSelectedMenu(menu),
			[setSelectedMenu],
		);

		const contextValue = {
			selectedMenu,
			isOpen,
			setIsOpen,
			onOpenMenu: () => setIsOpen(true),
			onSelectedMenu,
			onCloseMenu,
		};

		const menubarRef = useRef<HTMLDivElement>(null);
		useOutsideClick(menubarRef, () => onCloseMenu());

		return (
			<MenubarContext.Provider value={contextValue}>
				<Box ref={menubarRef}>
					<Box
						className={styles.menubar}
						ref={ref}
						{...restProps}
						role='menubar'
					>
						{children}
					</Box>
				</Box>
			</MenubarContext.Provider>
		);
	},
);
