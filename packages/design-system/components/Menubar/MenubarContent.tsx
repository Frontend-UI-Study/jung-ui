import { usePortal } from '@jung/shared/hooks';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import {
	type HTMLAttributes,
	forwardRef,
	useLayoutEffect,
	useState,
} from 'react';
import { createPortal } from 'react-dom';
import type { OmitAtomProps } from '../../types/atoms';
import { Box } from '../Box';
import * as styles from './Menubar.css';
import { useMenubarContext } from './context/MenubarContext';
import { useMenubarMenuContext } from './context/MenubarMenuContext';

export interface MenubarContent
	extends HTMLAttributes<HTMLDivElement>,
		OmitAtomProps {
	value?: string;
}

export const MenubarContent = forwardRef<HTMLDivElement, MenubarContent>(
	({ children, value, ...restProps }, ref) => {
		const { isOpen } = useMenubarContext();
		const { isSelected, contentId, triggerId, triggerRef } =
			useMenubarMenuContext();
		const portalNode = usePortal('menubar-portal');
		const [position, setPosition] = useState({ top: 0, left: 0 });

		useLayoutEffect(() => {
			if (triggerRef.current) {
				const rect = triggerRef.current.getBoundingClientRect();
				setPosition({
					top: rect.bottom + 8,
					left: rect.left,
				});
			}
		}, [triggerRef]);

		if (!isOpen || !isSelected || !portalNode) return null;

		const inlineVars = assignInlineVars({
			[styles.topVar]: `${position.top}px`,
			[styles.leftVar]: `${position.left}px`,
		});

		return createPortal(
			<Box
				style={inlineVars}
				id={contentId}
				aria-labelledby={triggerId}
				className={styles.content}
				ref={ref}
				{...restProps}
			>
				{children}
			</Box>,
			portalNode,
		);
	},
);
