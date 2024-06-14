import { type HTMLAttributes, forwardRef } from 'react';
import type { OmitAtomProps } from '../../types/atoms';
import { Box } from '../Box';

export interface MenubarSeparatorProps
	extends HTMLAttributes<HTMLDivElement>,
		OmitAtomProps {}

export const MenubarSeparator = forwardRef<
	HTMLDivElement,
	MenubarSeparatorProps
>(({ children, ...restProps }, ref) => {
	return (
		<Box
			marginY='0.5'
			borderStyle='dotted'
			borderColor='gray'
			borderTopWidth='hairline'
			ref={ref}
			{...restProps}
		/>
	);
});
