import { type HTMLAttributes, forwardRef } from 'react';

import type { OmitAtomProps } from '../../types/atoms';
import { Box } from '../Box';

export interface AccordionProps
	extends HTMLAttributes<HTMLDivElement>,
		OmitAtomProps {}

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
	({ children, className, ...restProps }: AccordionProps, ref?) => {
		return (
			<Box
				ref={ref}
				display='flex'
				flexDirection='column'
				rowGap='4'
				{...restProps}
			>
				{children}
			</Box>
		);
	},
);
