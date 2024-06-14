import {
	type HTMLAttributes,
	type ReactNode,
	forwardRef,
	useCallback,
	useEffect,
} from 'react';
import type { OmitAtomProps } from '../../types/atoms';
import { Box } from '../Box';
import * as styles from './Menubar.css';
import { useMenubarContext } from './context/MenubarContext';
import { useMenubarMenuContext } from './context/MenubarMenuContext';

export interface MenubarTrigger
	extends HTMLAttributes<HTMLDivElement>,
		OmitAtomProps {
	value?: string;
}

export const MenubarTrigger = forwardRef<HTMLDivElement, MenubarTrigger>(
	({ children, value, ...restProps }, ref) => {
		const { onSelectedMenu, isOpen, selectedMenu, onCloseMenu, onOpenMenu } =
			useMenubarContext();
		const { setIsSelected, triggerRef, triggerId } = useMenubarMenuContext();

		const extractText = useCallback(
			(child: ReactNode): string => {
				if (typeof child === 'string') {
					return child;
				}
				return '';
			},
			[selectedMenu],
		);

		const menuName = extractText(children);
		const isActive = selectedMenu === menuName;

		useEffect(() => {
			setIsSelected(isActive);
		}, [selectedMenu]);

		const handleMenuClick = useCallback(() => {
			if (isOpen && isActive) {
				onCloseMenu();
			} else {
				onOpenMenu();
				onSelectedMenu(menuName);
			}
		}, [menuName, selectedMenu]);

		const handleMouseEnter = () => {
			if (isOpen) {
				onSelectedMenu(menuName);
			}
		};

		return (
			<Box
				id={triggerId}
				ref={triggerRef}
				className={styles.trigger({ isActive })}
				{...restProps}
				role='menuitem'
				onClick={handleMenuClick}
				onMouseEnter={handleMouseEnter}
			>
				<Box ref={ref}>{children}</Box>
			</Box>
		);
	},
);
