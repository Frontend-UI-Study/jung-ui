import { type HTMLAttributes, forwardRef } from 'react';
import type { OmitAtomProps } from '../../types/atoms';
import { Box } from '../Box';
import * as styles from './Menubar.css';
import { useMenubarContext } from './context/MenubarContext';

export interface MenubarItemProps
	extends HTMLAttributes<HTMLDivElement>,
		OmitAtomProps {
	disabled?: boolean;
}

export const MenubarItem = forwardRef<HTMLDivElement, MenubarItemProps>(
	({ children, disabled = false, ...restProps }, ref) => {
		const { onCloseMenu } = useMenubarContext();
		return (
			<Box
				role='button'
				aria-disabled={disabled}
				className={styles.item({ disabled })}
				onClick={onCloseMenu}
				ref={ref}
				{...restProps}
			>
				{children}
			</Box>
		);
	},
);
